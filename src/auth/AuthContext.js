import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

/**
 * Global Auth Context
 * This will store the Supabase session and loading state
 */
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Holds the current Supabase session (null if logged out)
  const [session, setSession] = useState(null);

  // Used to block rendering until we know auth state
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    /**
     * 1️⃣ Get the existing session when the app starts
     * (important for app reloads / returning users)
     */
    supabase.auth.getSession().then(({ data }) => {
      setSession(data?.session ?? null);
      setInitializing(false); // auth state is now known
    });

    /**
     * 2️⃣ Listen for auth changes (login, logout, token refresh)
     * Supabase will call this automatically when auth state changes
     */
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    /**
     * 3️⃣ Cleanup listener when provider unmounts
     */
    return () => listener.subscription.unsubscribe();
  }, []);

  /**
   * Expose auth state to the entire app
   */
  return (
    <AuthContext.Provider value={{ session, initializing }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Custom hook so screens can easily access auth state
 */
export function useAuth() {
  return useContext(AuthContext);
}
