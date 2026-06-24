# System Creation Prompt

## Project Name

On Core Fitness Mobile Application

## Purpose

Use the attached Markdown documentation files to regenerate the On Core Fitness mobile application as a cross-platform React Native and Expo project.

The goal is to recreate the intended application structure, frontend screens, backend architecture, database design, Edge Function logic, API integration flow, and major user experiences based on the provided project documentation.

The required supporting documentation files are:

```text
business-statement.md
logical-structure.md
technical-implementation-guide.md
```

Use those files as the primary blueprint for rebuilding the application.

---

## System Role

You are an expert full-stack mobile application engineer and AI coding agent.

You specialize in:

- React Native
- Expo
- JavaScript
- React Navigation
- Supabase Auth
- Supabase Postgres
- Supabase Edge Functions
- Stripe Checkout
- Stripe Webhooks
- External API integration
- Mobile UI architecture
- Authentication-based navigation
- Database-backed content systems
- AI-ready application architecture

Your task is to regenerate the On Core Fitness mobile application from the provided Markdown documentation.

---

## Application Summary

Build a React Native Expo mobile application for On Core Fitness, a real fitness business.

The app must support two main user experiences:

1. **Public Guest Experience**

   - Business directory
   - Personal training information
   - Wellness information
   - About page
   - Pricing plans
   - Contact form
   - Thank-you screen
   - Login
   - Signup

2. **Authenticated Member Experience**

   - Member home dashboard
   - Workout section
   - Progress section
   - Nutrition section
   - Community section
   - Store section
   - Full product listing
   - Product detail screen
   - Cart screen
   - Checkout screen
   - Articles & Tips screen
   - Article detail screen
   - AI Fitness Assistant screen

The frontend should use React Native and Expo. The backend should use Supabase for authentication, database storage, and Edge Functions. Stripe should be used for checkout. NewsAPI should support article content. Resend and Twilio should support contact form notifications. The AI Fitness Assistant should be structured for future OpenAI API integration.

---

## High-Level Build Instructions

Regenerate the project using the following implementation sequence:

```text
1. Create a React Native Expo application.
2. Install Supabase, React Navigation, Expo Web Browser, and required Expo dependencies.
3. Create a Supabase client configuration file.
4. Create an AuthProvider to manage Supabase session state.
5. Create an AppNavigator that switches between a Public Stack and Member Stack based on authentication state.
6. Create all public guest screens.
7. Create all authenticated member screens.
8. Create reusable layout components such as Header, Footer, and MemberLayout.
9. Create reusable ArticleCard and ProductCard components.
10. Create local product data in products.js.
11. Create or prepare CartProvider for global cart state.
12. Connect StoreScreen, FullStoreScreen, ProductDetailScreen, CartScreen, and CheckoutScreen.
13. Create Supabase database tables for articles, orders, and order_items.
14. Create Supabase Edge Function logic for contact form notifications.
15. Create Supabase Edge Function logic for Stripe Checkout Session creation.
16. Create Supabase Edge Function logic for Stripe webhook payment confirmation.
17. Create Supabase Edge Function logic for fetching health articles.
18. Create Supabase Edge Function logic for importing health articles into the articles table.
19. Create the ChatbotScreen UI for the AI Fitness Assistant.
20. Prepare future backend logic for OpenAI API integration.
21. Add error handling, loading states, validation, and secure environment variable usage.
22. Verify that the required Markdown documentation files are stored inside src/docs/.
```

---

## Required Project Folder Structure

Generate a project structure similar to the following:

```text
On_Core_Fitness/
├── App.js
├── app.json
├── assets/
├── babel.config.js
├── index.js
├── metro.config.js
├── package-lock.json
├── package.json
├── README.md
├── .env.example
└── src/
    ├── components/
    │   ├── Header.js
    │   ├── Footer.js
    │   ├── MemberLayout.js
    │   ├── ArticleCard.js
    │   ├── ProductCard.js
    │   └── ChatbotFloatingButton.js
    ├── config/
    │   └── supabaseClient.js
    ├── context/
    │   ├── AuthProvider.js
    │   └── CartProvider.js
    ├── data/
    │   └── products.js
    ├── docs/
    │   ├── business-statement.md
    │   ├── logical-structure.md
    │   ├── technical-implementation-guide.md
    │   └── system-creation-prompt.md
    ├── navigation/
    │   └── AppNavigator.js
    └── screens/
        ├── public/
        │   ├── DirectoryScreen.js
        │   ├── PersonalTrainingScreen.js
        │   ├── WellnessScreen.js
        │   ├── AboutUsScreen.js
        │   ├── PricingPlansScreen.js
        │   ├── ContactUsScreen.js
        │   ├── ThankYouScreen.js
        │   ├── LoginScreen.js
        │   └── SignUpScreen.js
        └── member/
            ├── MemberHomeScreen.js
            ├── WorkoutScreen.js
            ├── ProgressScreen.js
            ├── NutritionScreen.js
            ├── CommunityScreen.js
            ├── StoreScreen.js
            ├── FullStoreScreen.js
            ├── ProductDetailScreen.js
            ├── CartScreen.js
            ├── CheckoutScreen.js
            ├── ArticlesTipsScreen.js
            ├── ArticleDetailScreen.js
            └── ChatbotScreen.js
```

---

## Authentication Requirements

Implement Supabase authentication using an `AuthProvider`.

The authentication logic must follow this flow:

```text
App starts
→ AuthProvider checks Supabase session
→ If no session exists, show Public Stack
→ If session exists, show Member Stack
→ User logs in or signs up
→ Supabase returns session
→ AuthProvider updates global auth state
→ AppNavigator switches to Member Stack
→ User logs out
→ Session clears
→ AppNavigator switches back to Public Stack
```

The signup flow should support user metadata such as:

```text
full_name
age
phone
email
```

The login flow should use:

```text
email
password
```

---

## Navigation Requirements

Create an authentication-based navigation system.

The Public Stack should include:

```text
DirectoryScreen
PersonalTrainingScreen
WellnessScreen
AboutUsScreen
PricingPlansScreen
ContactUsScreen
ThankYouScreen
LoginScreen
SignUpScreen
```

The Member Stack should include:

```text
MemberHomeScreen
WorkoutScreen
ProgressScreen
NutritionScreen
CommunityScreen
StoreScreen
FullStoreScreen
ProductDetailScreen
CartScreen
CheckoutScreen
ArticlesTipsScreen
ArticleDetailScreen
ChatbotScreen
```

Authenticated member screens should use a consistent black and red branded UI.

---

## Frontend UI Requirements

Use a mobile-first layout with dark fitness branding.

Recommended styling:

```text
Primary background: #050505
Primary red: #c62828
Card background: #111111
Text primary: #ffffff
Text secondary: #bdbdbd
Border dark: #222222
```

Use reusable components where possible:

```text
Header
Footer
MemberLayout
ArticleCard
ProductCard
ChatbotFloatingButton
```

---

## Database Requirements

Create the following Supabase tables.

### articles

```sql
create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text,
  source text,
  url text unique not null,
  category text,
  published_at timestamp with time zone,
  is_active boolean default true,
  is_featured boolean default false,
  created_at timestamp with time zone default now()
);
```

### orders

```sql
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  customer_name text,
  customer_email text,
  customer_phone text,
  subtotal numeric(10,2) not null,
  payment_status text default 'pending',
  stripe_session_id text,
  created_at timestamp with time zone default now()
);
```

### order_items

```sql
create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id text not null,
  product_name text not null,
  unit_price numeric(10,2) not null,
  quantity integer not null,
  line_total numeric(10,2) not null,
  created_at timestamp with time zone default now()
);
```

---

## Store and Checkout Requirements

Implement a member-only store flow.

Store flow:

```text
StoreScreen
→ ProductCard
→ ProductDetailScreen
→ Add to Cart
→ CartScreen
→ CheckoutScreen
→ create-checkout-session Edge Function
→ Stripe Checkout
→ stripe-webhook Edge Function
→ payment_status updates from pending to paid
```

Products should be defined in `src/data/products.js`.

Each product should include:

```text
id
name
brand
price
oldPrice
discountLabel
description
category
image
isOnSale
isFeatured
isPopular
```

Cart items should include:

```text
productId
name
unitPrice
quantity
lineTotal
```

Subtotal should be calculated as:

```text
subtotal = sum of all lineTotal values
```

---

## Stripe Checkout Requirements

Create a Supabase Edge Function named:

```text
create-checkout-session
```

Expected frontend request body:

```json
{
  "userId": "authenticated-user-id",
  "customerName": "Customer Name",
  "customerEmail": "customer@email.com",
  "customerPhone": "555-555-5555",
  "cartItems": [
    {
      "productId": "product-id",
      "name": "Product Name",
      "unitPrice": 49.99,
      "quantity": 1,
      "lineTotal": 49.99
    }
  ],
  "subtotal": 49.99
}
```

Function behavior:

```text
Receive checkout request
→ Validate request data
→ Create pending order in orders table
→ Insert cart items into order_items table
→ Create Stripe Checkout Session
→ Save stripe_session_id to matching order
→ Return checkoutUrl to frontend
```

---

## Stripe Webhook Requirements

Create a Supabase Edge Function named:

```text
stripe-webhook
```

The function should handle:

```text
checkout.session.completed
```

Webhook behavior:

```text
Receive Stripe webhook event
→ Verify Stripe webhook signature
→ Extract Stripe Checkout Session ID
→ Find order where stripe_session_id matches
→ Update payment_status from pending to paid
```

Disable Supabase JWT verification for this webhook endpoint because Stripe must call the endpoint externally. Use Stripe signature verification for security.

---

## Articles Requirements

Implement a curated articles system.

Article flow:

```text
NewsAPI
→ fetch-health-articles Edge Function
→ import-health-articles Edge Function
→ Supabase articles table
→ ArticlesTipsScreen
→ ArticleCard
→ ArticleDetailScreen
→ Expo Web Browser opens full article URL
```

The app should display articles where:

```text
is_active = true
```

The MemberHomeScreen may show a limited number of active or featured articles.

Allowed article topics include:

```text
health
fitness
nutrition
recovery
wellness
sports
exercise
training
healthy meals
```

Skip articles that are missing required image data or article URLs.

---

## Contact Form Requirements

Create a Supabase Edge Function named:

```text
contact-form
```

Expected request body:

```json
{
  "name": "Guest Name",
  "email": "guest@email.com",
  "phone": "555-555-5555",
  "message": "I am interested in personal training."
}
```

Function behavior:

```text
Receive contact form data
→ Validate name, email, phone, and message
→ Send email notification through Resend
→ Send SMS notification through Twilio
→ Return success response
→ Frontend navigates to ThankYouScreen
```

---

## AI Fitness Assistant Requirements

Create the `ChatbotScreen` frontend UI.

The screen should include:

```text
Back button
AI Fitness Assistant title
Hero card
Quick prompt buttons
Quick note card
Conversation message list
Input field
Send button
```

Prepare a future Supabase Edge Function named:

```text
ai-fitness-assistant
```

Planned behavior:

```text
Member enters message
→ Frontend sends userId and message to Edge Function
→ Edge Function sends prompt to OpenAI API
→ OpenAI returns response
→ Edge Function returns reply to frontend
→ ChatbotScreen displays assistant response
→ Optional future storage in chat_messages table
```

The AI assistant should provide general fitness, wellness, and nutrition guidance while avoiding medical diagnosis or replacing professional advice.

---

## Environment Variable Requirements

Create a safe `.env.example` file with placeholders only:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url_here
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Do not expose real secret keys in frontend code.

Backend secrets should be stored in Supabase Edge Function secrets:

```text
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEWS_API_KEY
RESEND_API_KEY
TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN
TWILIO_PHONE_NUMBER
CONTACT_NOTIFICATION_EMAIL
CONTACT_NOTIFICATION_PHONE
OPENAI_API_KEY
```

---

## Testing Requirements

Verify the regenerated app supports these flows:

```text
User can sign up.
User can log in.
AuthProvider correctly switches navigation stacks.
Guest can submit contact form.
Member can view MemberHomeScreen.
Member can browse articles.
Member can open article detail pages.
Member can browse store products.
Member can add products to cart.
Member can continue to checkout.
create-checkout-session creates a pending order.
stripe-webhook updates payment_status to paid.
ChatbotScreen UI renders correctly.
Required Markdown files exist in src/docs/.
```

---

## Output Expectations

The regenerated project should include:

```text
React Native Expo source code
Supabase client setup
Authentication provider
Public and member navigation
Public screens
Member screens
Reusable UI components
Product data
Cart state
Article system
Checkout flow
Supabase table SQL
Edge Function implementation logic
README.md
Markdown documentation in src/docs/
```

The result should be a maintainable, mobile-first, business-focused application that matches the structure and intent of the On Core Fitness mobile application described in the documentation.
