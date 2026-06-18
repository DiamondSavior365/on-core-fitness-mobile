# Technical Implementation Guide

## Project Name

On Core Fitness Mobile Application

## 1. Purpose of This Guide

This Technical Implementation Guide explains how the On Core Fitness mobile application is constructed from a frontend, backend, database, API, and external integration perspective.

The purpose of this document is to provide step-by-step implementation instructions with enough clarity that a developer or AI coding agent can regenerate the major application artifacts from this guide.

This guide covers:

- React Native Expo frontend setup
- Authentication flow using Supabase Auth
- Public and member navigation structure
- Screen implementation strategy
- Reusable component implementation
- Supabase database tables
- Supabase Edge Functions
- Stripe Checkout flow
- Stripe webhook flow
- Article fetching and curation flow
- Contact form notification flow
- Planned AI fitness assistant flow
- Environment variables and service connections

---

## 2. Technology Stack

The application uses the following technologies:

```text
Frontend:
- React Native
- Expo
- JavaScript
- React Navigation
- Expo Web Browser

Backend:
- Supabase Auth
- Supabase Postgres Database
- Supabase Edge Functions

External APIs and Services:
- Stripe Checkout
- Stripe Webhooks
- NewsAPI
- Resend
- Twilio
- Planned OpenAI API integration

Development Structure:
- Mobile-first screen-based architecture
- Authentication-based navigation
- Serverless backend functions
- Database-backed content and order records
```

---

## 3. Recommended Project Folder Structure

Create a React Native Expo project with a structure similar to the following:

```text
on-core-fitness-app/
├── App.js
├── package.json
├── .env
├── src/
│   ├── config/
│   │   └── supabaseClient.js
│   ├── context/
│   │   └── AuthProvider.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── MemberLayout.js
│   │   ├── ArticleCard.js
│   │   ├── ProductCard.js
│   │   └── ChatbotFloatingButton.js
│   ├── data/
│   │   └── products.js
│   ├── screens/
│   │   ├── public/
│   │   │   ├── DirectoryScreen.js
│   │   │   ├── PersonalTrainingScreen.js
│   │   │   ├── WellnessScreen.js
│   │   │   ├── AboutUsScreen.js
│   │   │   ├── PricingPlansScreen.js
│   │   │   ├── ContactUsScreen.js
│   │   │   ├── ThankYouScreen.js
│   │   │   ├── LoginScreen.js
│   │   │   └── SignUpScreen.js
│   │   └── member/
│   │       ├── MemberHomeScreen.js
│   │       ├── WorkoutScreen.js
│   │       ├── ProgressScreen.js
│   │       ├── NutritionScreen.js
│   │       ├── CommunityScreen.js
│   │       ├── StoreScreen.js
│   │       ├── FullStoreScreen.js
│   │       ├── ProductDetailScreen.js
│   │       ├── CartScreen.js
│   │       ├── CheckoutScreen.js
│   │       ├── ArticlesTipsScreen.js
│   │       ├── ArticleDetailScreen.js
│   │       └── ChatbotScreen.js
│   └── utils/
│       ├── formatCurrency.js
│       └── validators.js
└── supabase/
    └── functions/
        ├── create-checkout-session/
        ├── stripe-webhook/
        ├── fetch-health-articles/
        ├── import-health-articles/
        ├── contact-form/
        └── ai-fitness-assistant/
```

---

## 4. Frontend Setup

### 4.1 Create the Expo App

Create a new Expo React Native project.

```bash
npx create-expo-app on-core-fitness-app
cd on-core-fitness-app
```

Install the required dependencies.

```bash
npm install @supabase/supabase-js
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
npx expo install expo-web-browser
npx expo install expo-linking
```

Optional font dependencies can be installed if custom fonts are used.

```bash
npx expo install expo-font
```

---

## 5. Environment Variables

Create a `.env` file at the root of the project.

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Do not store secret backend keys in the frontend project. Secret keys such as Stripe secret keys, Stripe webhook secrets, Twilio tokens, Resend API keys, NewsAPI keys, and OpenAI keys should only be stored in Supabase Edge Function secrets.

Expected Supabase Edge Function secrets:

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

## 6. Supabase Client Configuration

Create a Supabase client file.

File path:

```text
src/config/supabaseClient.js
```

Implementation logic:

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

Purpose:

- This file creates the Supabase client used throughout the frontend.
- It allows screens and functions to access Supabase Auth, database queries, and Edge Functions.

---

## 7. Authentication Provider Implementation

Create a global authentication context.

File path:

```text
src/context/AuthProvider.js
```

Implementation requirements:

- Store the current authenticated user.
- Store the current Supabase session.
- Track loading state while checking for an existing session.
- Listen for authentication changes.
- Provide login, signup, and logout helper functions if desired.

AuthProvider behavior:

```text
App starts
→ AuthProvider calls supabase.auth.getSession()
→ If session exists, store session and user
→ Subscribe to supabase.auth.onAuthStateChange()
→ Update user and session when login/signup/logout occurs
→ Provide auth state to AppNavigator
```

Recommended state values:

```text
session
user
loading
```

AuthProvider should wrap the entire app in `App.js`.

---

## 8. App.js Implementation

The root `App.js` file should:

1. Load fonts if custom fonts are used.
2. Wrap the app in `AuthProvider`.
3. Render `AppNavigator`.

Recommended structure:

```text
App.js
→ Load app assets or fonts
→ Return AuthProvider
→ Render AppNavigator inside AuthProvider
```

Example logic:

```javascript
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
```

---

## 9. Navigation Implementation

Create an app navigator.

File path:

```text
src/navigation/AppNavigator.js
```

The app should use authentication-based navigation.

Implementation logic:

```text
Read user/session/loading from AuthProvider
→ If loading, show loading screen or splash screen
→ If no session exists, render Public Stack
→ If session exists, render Member Stack
```

### 9.1 Public Stack

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

### 9.2 Member Stack

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

### 9.3 Navigation Rules

```text
Guest user
→ Public Stack only

Authenticated member
→ Member Stack only

User logs in
→ Auth state updates
→ AppNavigator switches to Member Stack

User logs out
→ Auth state clears
→ AppNavigator switches to Public Stack
```

---

## 10. Public Screen Implementation

Public screens are used by unauthenticated visitors.

### 10.1 DirectoryScreen

Purpose:

- Acts as the public entry screen.
- Displays On Core Fitness branding.
- Links to public business sections.

Implementation requirements:

- Show gym branding and main call-to-action buttons.
- Navigate to public screens such as Personal Training, Wellness, Pricing, Contact, Login, and Signup.

### 10.2 PersonalTrainingScreen

Purpose:

- Displays personal training information.

Implementation requirements:

- Show training service details.
- Include call-to-action to contact the gym or view pricing.

### 10.3 WellnessScreen

Purpose:

- Displays wellness-related services or information.

Implementation requirements:

- Show wellness content.
- Include navigation back to directory or contact form.

### 10.4 AboutUsScreen

Purpose:

- Describes the gym and business.

Implementation requirements:

- Include business background, mission, and gym-focused content.

### 10.5 PricingPlansScreen

Purpose:

- Displays pricing or membership plan information.

Implementation requirements:

- Show available pricing plans.
- Include a call-to-action for contact, signup, or future membership checkout.

### 10.6 ContactUsScreen

Purpose:

- Allows guest users to submit an inquiry.

Required fields:

```text
name
email
phone
message
```

Frontend logic:

```text
User enters contact information
→ Validate required fields
→ Format phone number if needed
→ Call contact-form Edge Function
→ If success, navigate to ThankYouScreen
→ If error, display error message
```

### 10.7 ThankYouScreen

Purpose:

- Confirms that the contact form was submitted.

Implementation requirements:

- Display a thank-you message.
- Provide navigation back to the public directory or login/signup.

### 10.8 LoginScreen

Purpose:

- Allows existing users to log in.

Required fields:

```text
email
password
```

Frontend logic:

```text
User enters email and password
→ Call supabase.auth.signInWithPassword()
→ If successful, AuthProvider receives session
→ AppNavigator switches to Member Stack
→ If error, display error message
```

### 10.9 SignUpScreen

Purpose:

- Allows new users to create an account.

Recommended fields:

```text
full_name
age
email
password
phone
```

Frontend logic:

```text
User enters signup data
→ Validate required fields
→ Call supabase.auth.signUp()
→ Store full_name, age, and phone in user metadata if needed
→ If successful, AuthProvider receives session
→ AppNavigator switches to Member Stack
```

---

## 11. Member Layout Implementation

Create a shared layout component.

File path:

```text
src/components/MemberLayout.js
```

Purpose:

- Wrap most authenticated screens.
- Provide consistent branding.
- Display shared header and footer.

Implementation structure:

```text
MemberLayout
├── SafeAreaView
├── Header
├── Screen content children
└── Footer
```

Expected props:

```text
children
```

Optional props:

```text
title
hideFooter
hideHeader
```

---

## 12. Header and Footer Implementation

### 12.1 Header

File path:

```text
src/components/Header.js
```

Purpose:

- Displays the On Core Fitness branding.
- Gives the member side of the app a consistent top section.

Possible content:

```text
logo
screen title
brand text
back button when needed
```

### 12.2 Footer

File path:

```text
src/components/Footer.js
```

Purpose:

- Provides persistent member navigation.

Recommended footer tabs:

```text
Home
Progress
Meals or Nutrition
Store
```

Footer logic:

```text
User taps Home
→ Navigate to MemberHomeScreen

User taps Progress
→ Navigate to ProgressScreen

User taps Meals/Nutrition
→ Navigate to NutritionScreen

User taps Store
→ Navigate to StoreScreen
```

---

## 13. Member Home Screen Implementation

File path:

```text
src/screens/member/MemberHomeScreen.js
```

Purpose:

- Main dashboard for authenticated members.
- Displays personalized welcome content.
- Provides shortcuts to member features.
- Displays article previews.
- Displays floating chatbot button.

Implementation requirements:

```text
Read authenticated user from AuthProvider
→ Display welcome message using full_name or email
→ Render dashboard cards or sections
→ Fetch top active or featured articles
→ Display top article previews with ArticleCard
→ Display ChatbotFloatingButton near bottom-right
```

Article preview logic:

```text
Query articles table
→ Filter is_active = true
→ Optionally filter is_featured = true
→ Order by published_at descending
→ Limit to top 2
→ Render ArticleCard components
```

---

## 14. ArticleCard Component Implementation

File path:

```text
src/components/ArticleCard.js
```

Purpose:

- Reusable card for displaying article previews.

Required props:

```text
article
onPress
```

Article object should include:

```text
id
title
description
image_url
source
url
category
published_at
```

UI requirements:

```text
Display article image
Display category label
Display source name
Display title
Display short description
Allow tap navigation to ArticleDetailScreen
```

Tap behavior:

```text
User taps ArticleCard
→ Navigate to ArticleDetailScreen
→ Pass selected article as route parameter
```

---

## 15. ArticlesTipsScreen Implementation

File path:

```text
src/screens/member/ArticlesTipsScreen.js
```

Purpose:

- Displays a larger list of curated articles for members.

Frontend logic:

```text
Screen loads
→ Set loading = true
→ Query Supabase articles table
→ Filter is_active = true
→ Order by published_at descending
→ Limit display count if needed
→ Store articles in state
→ Set loading = false
→ Render ArticleCard list
```

Supabase query logic:

```javascript
const { data, error } = await supabase
  .from("articles")
  .select("*")
  .eq("is_active", true)
  .order("published_at", { ascending: false });
```

Display behavior:

```text
If loading, show loading state
If error, show error message
If no articles, show empty state
If articles exist, show list/grid of ArticleCard components
```

---

## 16. ArticleDetailScreen Implementation

File path:

```text
src/screens/member/ArticleDetailScreen.js
```

Purpose:

- Displays the selected article in more detail.

Data source:

```text
Receives article object through navigation route params
```

Display:

```text
article image
category
source
title
description
published date
button to open full article
```

External link behavior:

```text
User taps "Read Full Article"
→ App opens article.url using Expo Web Browser
```

Implementation:

```javascript
import * as WebBrowser from "expo-web-browser";

await WebBrowser.openBrowserAsync(article.url);
```

---

## 17. Store Product Data Implementation

Create local product data.

File path:

```text
src/data/products.js
```

Purpose:

- Stores product information used by StoreScreen, FullStoreScreen, ProductDetailScreen, CartScreen, and CheckoutScreen.

Product object structure:

```javascript
{
  id: "product-id",
  name: "Product Name",
  brand: "Brand Name",
  price: 29.99,
  oldPrice: 39.99,
  discountLabel: "25% OFF",
  description: "Product description",
  category: "Supplements",
  image: require("../../assets/product-image.png"),
  isOnSale: true,
  isFeatured: false,
  isPopular: true
}
```

Recommended exported filters:

```javascript
export const flashSaleProducts = products.filter((item) => item.isOnSale);
export const featuredProducts = products.filter((item) => item.isFeatured);
export const popularProducts = products.filter((item) => item.isPopular);
export const allProducts = products;
```

---

## 18. ProductCard Component Implementation

File path:

```text
src/components/ProductCard.js
```

Purpose:

- Reusable card for displaying products in the store.

Required props:

```text
product
onPress
```

Display:

```text
product image
product name
brand
price
old price if available
discount label if available
```

Tap behavior:

```text
User taps ProductCard
→ Navigate to ProductDetailScreen
→ Pass product as route parameter
```

---

## 19. StoreScreen Implementation

File path:

```text
src/screens/member/StoreScreen.js
```

Purpose:

- Main store landing page.

Implementation requirements:

```text
Load products from products.js
→ Display store header
→ Display quick filters:
   - Flash Sale
   - Featured Products
   - Popular Items
   - All Products
→ Render ProductCard sections
→ Allow navigation to FullStoreScreen
→ Allow navigation to CartScreen
```

Store navigation behavior:

```text
User taps Flash Sale
→ Navigate to FullStoreScreen with filter = flashSale

User taps Featured Products
→ Navigate to FullStoreScreen with filter = featured

User taps Popular Items
→ Navigate to FullStoreScreen with filter = popular

User taps All Products
→ Navigate to FullStoreScreen with filter = all
```

---

## 20. FullStoreScreen Implementation

File path:

```text
src/screens/member/FullStoreScreen.js
```

Purpose:

- Displays a full product list based on the selected store category.

Route params:

```text
filterType
title
```

Filtering logic:

```text
If filterType = flashSale, use flashSaleProducts
If filterType = featured, use featuredProducts
If filterType = popular, use popularProducts
If filterType = all, use allProducts
```

Display:

```text
Header with back button
Cart button
ProductCard list
```

---

## 21. ProductDetailScreen Implementation

File path:

```text
src/screens/member/ProductDetailScreen.js
```

Purpose:

- Displays full product information and allows the user to add the product to the cart.

Route params:

```text
product
```

Display:

```text
product image
product name
brand
price
old price
discount label
description
quantity selector
add to cart button
```

Add-to-cart logic:

```text
User selects quantity
→ Quantity must be at least 1
→ User taps Add to Cart
→ Product and quantity are added to cart state
→ User can navigate to CartScreen
```

Cart state can be implemented using React Context, route params, or temporary state during early development. For a scalable implementation, create a `CartProvider`.

---

## 22. Cart State Implementation

Recommended file path:

```text
src/context/CartProvider.js
```

Purpose:

- Store selected products globally across the member store and checkout flow.

Cart state should include:

```text
cartItems
addToCart(product, quantity)
removeFromCart(productId)
updateQuantity(productId, quantity)
clearCart()
subtotal
```

Cart item structure:

```javascript
{
  productId: "product-id",
  name: "Product Name",
  unitPrice: 29.99,
  quantity: 2,
  lineTotal: 59.98
}
```

Subtotal calculation:

```text
subtotal = sum of each item lineTotal
lineTotal = unitPrice * quantity
```

---

## 23. CartScreen Implementation

File path:

```text
src/screens/member/CartScreen.js
```

Purpose:

- Allows the member to review selected items before checkout.

Implementation requirements:

```text
Read cartItems from CartProvider
→ Display each item
→ Display name, unit price, quantity, and line total
→ Allow quantity update
→ Allow item removal
→ Calculate and display subtotal
→ Continue to CheckoutScreen
```

Empty cart behavior:

```text
If cartItems length is 0
→ Display empty cart message
→ Provide button to return to StoreScreen
```

---

## 24. CheckoutScreen Implementation

File path:

```text
src/screens/member/CheckoutScreen.js
```

Purpose:

- Prepares customer and cart data and starts Stripe Checkout.

Required data:

```text
userId
customerName
customerEmail
customerPhone
cartItems
subtotal
```

Frontend logic:

```text
Read user from AuthProvider
→ Read cartItems and subtotal from CartProvider
→ Pre-fill customer fields from user metadata if available
→ Validate customer information
→ Validate cart is not empty
→ User taps Continue to Payment
→ Call create-checkout-session Edge Function
→ Receive checkoutUrl
→ Open checkoutUrl using Expo Web Browser
```

Supabase Edge Function call:

```javascript
const { data, error } = await supabase.functions.invoke(
  "create-checkout-session",
  {
    body: {
      userId: user.id,
      customerName,
      customerEmail,
      customerPhone,
      cartItems,
      subtotal,
    },
  }
);
```

Opening Stripe Checkout:

```javascript
await WebBrowser.openBrowserAsync(data.checkoutUrl);
```

Error handling:

```text
If cart is empty, show error
If customer info is missing, show validation error
If Edge Function returns error, show checkout error
If checkoutUrl is missing, show fallback error
```

---

## 25. Supabase Database Setup

Create the following tables in Supabase.

---

## 26. articles Table

Create an `articles` table.

Recommended SQL structure:

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

Purpose:

- Stores curated articles visible in the app.

Recommended query from frontend:

```sql
select *
from articles
where is_active = true
order by published_at desc;
```

---

## 27. orders Table

Create an `orders` table.

Recommended SQL structure:

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

Purpose:

- Stores order-level checkout records.

Payment statuses:

```text
pending
paid
failed
cancelled
```

---

## 28. order_items Table

Create an `order_items` table.

Recommended SQL structure:

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

Purpose:

- Stores individual products connected to each order.

Relationship:

```text
One order can have many order_items.
Each order_item belongs to one order.
```

---

## 29. Recommended Row Level Security Policies

Enable Row Level Security for app-facing tables.

### 29.1 articles Policies

Articles should be readable by authenticated users.

Example policy:

```sql
alter table articles enable row level security;

create policy "Authenticated users can read active articles"
on articles
for select
to authenticated
using (is_active = true);
```

Admin insert/update/delete can be managed manually through Supabase Dashboard or through separate admin policies.

### 29.2 orders Policies

Users should only read their own orders.

```sql
alter table orders enable row level security;

create policy "Users can read their own orders"
on orders
for select
to authenticated
using (auth.uid() = user_id);
```

Order creation can be handled by Edge Functions using the service role key, not directly by the frontend.

### 29.3 order_items Policies

Users should only read order items connected to their own orders.

```sql
alter table order_items enable row level security;

create policy "Users can read their own order items"
on order_items
for select
to authenticated
using (
  exists (
    select 1
    from orders
    where orders.id = order_items.order_id
    and orders.user_id = auth.uid()
  )
);
```

---

## 30. Supabase Edge Function Setup

Supabase Edge Functions should handle secure backend tasks.

Recommended functions:

```text
create-checkout-session
stripe-webhook
fetch-health-articles
import-health-articles
contact-form
ai-fitness-assistant
```

Each function should:

```text
Validate request method
Parse request body
Validate required fields
Use environment secrets for API keys
Return JSON response
Handle and log errors
```

---

## 31. create-checkout-session Edge Function

Function name:

```text
create-checkout-session
```

Purpose:

- Create a pending order in Supabase.
- Insert order items.
- Create a Stripe Checkout Session.
- Save the Stripe session ID.
- Return the hosted Stripe Checkout URL to the frontend.

### 31.1 Expected Request Body

```json
{
  "userId": "authenticated-user-id",
  "customerName": "Customer Name",
  "customerEmail": "customer@email.com",
  "customerPhone": "555-555-5555",
  "cartItems": [
    {
      "productId": "protein-powder",
      "name": "Protein Powder",
      "unitPrice": 49.99,
      "quantity": 1,
      "lineTotal": 49.99
    }
  ],
  "subtotal": 49.99
}
```

### 31.2 Function Logic

```text
Receive POST request
→ Parse body
→ Validate userId, customerName, customerEmail, cartItems, and subtotal
→ Create order in orders table with payment_status = pending
→ Insert each cart item into order_items table using the created order id
→ Convert cartItems into Stripe line_items
→ Create Stripe Checkout Session
→ Save Stripe Checkout Session ID into orders.stripe_session_id
→ Return checkoutUrl to frontend
```

### 31.3 Stripe Line Item Mapping

Each cart item should become a Stripe line item.

```text
Stripe line item name = product name
Stripe unit_amount = unitPrice * 100
Stripe quantity = quantity
Stripe currency = usd
```

### 31.4 Recommended Response

```json
{
  "checkoutUrl": "https://checkout.stripe.com/..."
}
```

### 31.5 Error Cases

Return an error if:

```text
Request method is not POST
Required customer fields are missing
Cart is empty
Subtotal is invalid
Stripe session creation fails
Supabase insert fails
```

---

## 32. stripe-webhook Edge Function

Function name:

```text
stripe-webhook
```

Purpose:

- Receive payment confirmation events from Stripe.
- Verify Stripe webhook signature.
- Update the matching order from `pending` to `paid`.

### 32.1 Important Security Requirement

Disable Supabase JWT verification for this function because Stripe must call the endpoint directly. Security should be handled through Stripe webhook signature verification using `STRIPE_WEBHOOK_SECRET`.

### 32.2 Event to Handle

```text
checkout.session.completed
```

### 32.3 Function Logic

```text
Receive raw webhook request from Stripe
→ Read raw request body
→ Read Stripe-Signature header
→ Verify event using Stripe webhook secret
→ If event type is checkout.session.completed:
   → Extract Stripe Checkout Session ID
   → Find order where stripe_session_id equals the session ID
   → Update payment_status to paid
→ Return success response to Stripe
```

### 32.4 Error Cases

Return an error if:

```text
Stripe signature is invalid
Webhook body cannot be parsed
Matching order is not found
Database update fails
```

---

## 33. fetch-health-articles Edge Function

Function name:

```text
fetch-health-articles
```

Purpose:

- Fetch article data from NewsAPI.
- Filter article results.
- Return app-friendly article objects to the frontend.

### 33.1 Function Logic

```text
Receive request from frontend
→ Call NewsAPI using NEWS_API_KEY
→ Request health, fitness, nutrition, recovery, wellness, and sports-related articles
→ Filter out irrelevant results
→ Skip articles without image URLs
→ Map NewsAPI results into app article objects
→ Return article list
```

### 33.2 Article Object Returned

```json
{
  "title": "Article Title",
  "description": "Article description",
  "image_url": "https://image-url.com/image.jpg",
  "source": "Source Name",
  "url": "https://article-url.com",
  "category": "Nutrition",
  "published_at": "2026-06-18T00:00:00Z"
}
```

### 33.3 Filtering Rules

Allowed topic terms may include:

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

Reject or skip articles when:

```text
image_url is missing
title is missing
url is missing
article is unrelated to allowed topics
article appears duplicated
```

---

## 34. import-health-articles Edge Function

Function name:

```text
import-health-articles
```

Purpose:

- Fetch article results from NewsAPI.
- Filter and clean article results.
- Insert selected articles into the Supabase `articles` table.

### 34.1 Function Logic

```text
Receive request from admin or developer
→ Call NewsAPI
→ Filter articles by allowed terms
→ Skip articles without images
→ Normalize title, description, source, URL, category, and published date
→ Check for duplicate URL
→ Insert non-duplicate article into articles table
→ Return import summary
```

### 34.2 Import Summary Response

Recommended response:

```json
{
  "inserted": 12,
  "skipped": 8,
  "duplicates": 5
}
```

### 34.3 Duplicate Prevention

The `articles.url` field should have a unique constraint.

```text
If article URL already exists
→ Skip the article
→ Do not insert duplicate
```

---

## 35. contact-form Edge Function

Function name:

```text
contact-form
```

Purpose:

- Receive public contact form submissions.
- Send an email notification through Resend.
- Send an SMS notification through Twilio.
- Return a success response to the frontend.

### 35.1 Expected Request Body

```json
{
  "name": "Guest Name",
  "email": "guest@email.com",
  "phone": "555-555-5555",
  "message": "I am interested in personal training."
}
```

### 35.2 Function Logic

```text
Receive POST request
→ Parse contact form body
→ Validate name, email, phone, and message
→ Format notification message
→ Send email through Resend
→ Send SMS through Twilio
→ Return success response
```

### 35.3 Recommended Email Content

```text
New On Core Fitness Contact Form Submission

Name:
{name}

Email:
{email}

Phone:
{phone}

Message:
{message}
```

### 35.4 Recommended SMS Content

```text
New On Core Fitness inquiry from {name}. Phone: {phone}. Email: {email}.
```

### 35.5 Error Cases

Return an error if:

```text
Required fields are missing
Email sending fails
SMS sending fails
External API credentials are missing
```

---

## 36. Planned ai-fitness-assistant Edge Function

Function name:

```text
ai-fitness-assistant
```

Purpose:

- Receive a member fitness question.
- Send the question to the OpenAI API.
- Return an AI-generated fitness assistant response.

### 36.1 Expected Request Body

```json
{
  "userId": "authenticated-user-id",
  "message": "What should I eat after a workout?"
}
```

### 36.2 Function Logic

```text
Receive POST request
→ Validate userId and message
→ Create a system prompt for a fitness assistant
→ Send request to OpenAI API
→ Receive assistant response
→ Return response to frontend
→ Optionally store conversation in chat_messages table
```

### 36.3 Recommended Guardrails

The AI assistant should:

```text
Provide general fitness, nutrition, and wellness guidance
Avoid diagnosing medical conditions
Avoid replacing professional medical advice
Encourage users to consult professionals when needed
Keep responses practical and easy to understand
```

### 36.4 Recommended Response

```json
{
  "reply": "After a workout, aim for a meal with protein, carbohydrates, and fluids..."
}
```

---

## 37. ChatbotScreen Implementation

File path:

```text
src/screens/member/ChatbotScreen.js
```

Purpose:

- Provides the member-facing AI Fitness Assistant interface.

UI elements:

```text
Top row with Back button and title
Hero card with AI assistant branding
Quick prompt buttons
Quick note card
Conversation message list
Input bar
Send button
```

Frontend state:

```text
messages
inputText
loading
```

Message object structure:

```javascript
{
  id: "unique-message-id",
  role: "user" | "assistant",
  text: "message text",
  createdAt: new Date().toISOString()
}
```

Send message flow:

```text
User types message
→ User taps send
→ Add user message to messages state
→ Clear input
→ Set loading true
→ Call ai-fitness-assistant Edge Function
→ Receive assistant reply
→ Add assistant reply to messages state
→ Set loading false
```

Quick prompt behavior:

```text
User taps quick prompt
→ Prompt text is inserted into input
or
→ Prompt is sent directly as a user message
```

---

## 38. Member Workout, Progress, Nutrition, and Community Screens

These screens currently act as member-only sections and can be expanded over time.

### 38.1 WorkoutScreen

Purpose:

- Display workout-related resources or future workout plans.

Recommended structure:

```text
MemberLayout
→ Screen title
→ Workout cards
→ Exercise categories
→ Future personalized workout data
```

### 38.2 ProgressScreen

Purpose:

- Display progress tracking or future member analytics.

Recommended structure:

```text
MemberLayout
→ Screen title
→ Progress summary cards
→ Future charts or check-ins
```

### 38.3 NutritionScreen

Purpose:

- Display nutrition guidance, meal ideas, or future nutrition tracking.

Recommended structure:

```text
MemberLayout
→ Screen title
→ Meal suggestions
→ Nutrition cards
→ Future nutrition tracking data
```

### 38.4 CommunityScreen

Purpose:

- Display community features or future member announcements.

Recommended structure:

```text
MemberLayout
→ Screen title
→ Community posts or placeholder cards
→ Future member interaction features
```

---

## 39. Error Handling Strategy

All frontend operations should include error handling.

### 39.1 Frontend Error Handling

For Supabase Auth:

```text
If login fails
→ Display Supabase auth error message

If signup fails
→ Display Supabase auth error message
```

For database queries:

```text
If query fails
→ Display readable error state
→ Avoid crashing screen
```

For Edge Functions:

```text
If function returns error
→ Display user-friendly message
→ Log detailed error for development
```

For Stripe Checkout:

```text
If checkoutUrl is missing
→ Display checkout error
→ Do not open browser
```

### 39.2 Backend Error Handling

Each Edge Function should:

```text
Wrap logic in try/catch
Validate required fields
Return status code 400 for invalid input
Return status code 405 for invalid request method
Return status code 500 for server or external API failures
Return JSON error messages
```

Recommended error response:

```json
{
  "error": "Readable error message"
}
```

---

## 40. Loading State Strategy

Screens that fetch data should include loading states.

Examples:

```text
ArticlesTipsScreen
→ loading while fetching articles

CheckoutScreen
→ loading while creating Stripe Checkout Session

ChatbotScreen
→ loading while waiting for AI response

ContactUsScreen
→ loading while submitting contact form
```

Loading behavior:

```text
Set loading = true before async request
→ Run async request
→ On success, update state
→ On error, display error
→ Set loading = false in finally block
```

---

## 41. Validation Strategy

### 41.1 Contact Form Validation

Required:

```text
name
email
phone
message
```

Validation rules:

```text
Name cannot be empty
Email must include valid email structure
Phone cannot be empty
Message cannot be empty
```

### 41.2 Signup Validation

Required:

```text
full_name
email
password
```

Optional or recommended:

```text
age
phone
```

Validation rules:

```text
Email must be valid
Password must meet minimum length
Full name cannot be empty
```

### 41.3 Checkout Validation

Required:

```text
authenticated user
customer name
customer email
customer phone
cartItems
subtotal
```

Validation rules:

```text
User must be logged in
Cart cannot be empty
Subtotal must be greater than 0
Customer name cannot be empty
Customer email must be valid
Customer phone cannot be empty
```

---

## 42. Styling and Branding Guide

The app should use a consistent black and red fitness-focused brand style.

Recommended colors:

```text
Primary background: #050505
Primary red: #c62828
Card background: #111111
Text primary: #ffffff
Text secondary: #bdbdbd
Border dark: #222222
```

Recommended design style:

```text
Dark mobile UI
Bold fitness branding
Red action buttons
Rounded cards
High-contrast text
Consistent spacing
Persistent member header and footer
```

---

## 43. Stripe Checkout End-to-End Flow

Complete Stripe flow:

```text
1. Member adds products to cart.
2. Member opens CartScreen.
3. Member confirms subtotal.
4. Member opens CheckoutScreen.
5. Frontend validates user and cart data.
6. Frontend calls create-checkout-session Edge Function.
7. Edge Function creates pending order in Supabase.
8. Edge Function creates order_items records.
9. Edge Function creates Stripe Checkout Session.
10. Edge Function saves stripe_session_id to the order.
11. Edge Function returns checkoutUrl to frontend.
12. Frontend opens checkoutUrl with Expo Web Browser.
13. Member completes payment on Stripe hosted checkout page.
14. Stripe sends checkout.session.completed event to stripe-webhook.
15. stripe-webhook verifies Stripe signature.
16. stripe-webhook finds order using stripe_session_id.
17. stripe-webhook updates payment_status from pending to paid.
```

---

## 44. Article End-to-End Flow

Complete article flow:

```text
1. Developer or admin triggers import-health-articles.
2. Edge Function calls NewsAPI.
3. Function filters for health, fitness, nutrition, recovery, wellness, or sports articles.
4. Function skips missing images and duplicate URLs.
5. Function inserts valid articles into Supabase articles table.
6. Admin controls article visibility using is_active and is_featured.
7. Member opens MemberHomeScreen or ArticlesTipsScreen.
8. Frontend queries active articles from Supabase.
9. ArticleCard components display article previews.
10. Member taps an article.
11. ArticleDetailScreen displays article details.
12. Member opens full article using Expo Web Browser.
```

---

## 45. Contact Form End-to-End Flow

Complete contact form flow:

```text
1. Guest opens ContactUsScreen.
2. Guest enters name, email, phone, and message.
3. Frontend validates form data.
4. Frontend calls contact-form Edge Function.
5. Edge Function validates incoming data.
6. Edge Function sends email notification through Resend.
7. Edge Function sends SMS notification through Twilio.
8. Edge Function returns success response.
9. Frontend navigates to ThankYouScreen.
```

---

## 46. Authentication End-to-End Flow

Complete authentication flow:

```text
1. App starts.
2. AuthProvider checks Supabase session.
3. If no session exists, Public Stack is shown.
4. Guest signs up or logs in.
5. Supabase Auth returns a session.
6. AuthProvider stores session and user.
7. AppNavigator switches to Member Stack.
8. Member uses authenticated app features.
9. User logs out.
10. Supabase clears session.
11. AuthProvider updates state.
12. AppNavigator switches back to Public Stack.
```

---

## 47. Planned Sports Insights Implementation

The app is planned to include a member-only sports insights section.

### 47.1 Purpose

The sports section should display sports data, team logos, game information, predictions, AI insights, and algorithm success rate.

### 47.2 Planned Implementation Flow

```text
Member opens Sports section
→ Frontend calls sports data backend function or external sports API
→ App receives team, game, logo, and stats data
→ Backend analyzes historical data and trends
→ Prediction algorithm generates game prediction
→ AI layer summarizes reasoning in plain language
→ App displays prediction, confidence score, trend data, and success rate
```

### 47.3 Possible Tables

```sql
create table if not exists sports_games (
  id uuid primary key default gen_random_uuid(),
  league text,
  home_team text,
  away_team text,
  game_time timestamp with time zone,
  home_team_logo text,
  away_team_logo text,
  status text,
  created_at timestamp with time zone default now()
);
```

```sql
create table if not exists sports_predictions (
  id uuid primary key default gen_random_uuid(),
  game_id uuid references sports_games(id) on delete cascade,
  predicted_winner text,
  confidence_score numeric(5,2),
  prediction_reason text,
  result_status text default 'pending',
  created_at timestamp with time zone default now()
);
```

```sql
create table if not exists sports_prediction_results (
  id uuid primary key default gen_random_uuid(),
  prediction_id uuid references sports_predictions(id) on delete cascade,
  actual_winner text,
  was_correct boolean,
  evaluated_at timestamp with time zone default now(),
  notes text
);
```

---

## 48. Planned Membership Gating Implementation

The app can later restrict premium member features based on payment or subscription status.

### 48.1 Possible memberships Table

```sql
create table if not exists memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  membership_status text default 'inactive',
  plan_name text,
  current_period_start timestamp with time zone,
  current_period_end timestamp with time zone,
  created_at timestamp with time zone default now()
);
```

### 48.2 Membership Access Flow

```text
User logs in
→ App fetches membership status from memberships table
→ If membership_status = active, unlock premium member sections
→ If membership_status is inactive, restrict premium features
→ Stripe subscription webhook updates membership status
```

---

## 49. Regeneration Instructions for an AI Coding Agent

An AI coding agent should regenerate the app using this sequence:

```text
1. Create a React Native Expo project.
2. Install Supabase, React Navigation, Expo Web Browser, and required Expo dependencies.
3. Create Supabase client configuration.
4. Create AuthProvider to manage session and user state.
5. Create AppNavigator with Public Stack and Member Stack.
6. Create all public screens.
7. Create all member screens.
8. Create MemberLayout, Header, and Footer.
9. Create ArticleCard and ProductCard reusable components.
10. Create products.js with product objects and filters.
11. Create CartProvider for global cart state.
12. Connect StoreScreen, ProductDetailScreen, CartScreen, and CheckoutScreen.
13. Create Supabase tables: articles, orders, and order_items.
14. Create Supabase RLS policies for safe authenticated reads.
15. Create contact-form Edge Function.
16. Create create-checkout-session Edge Function.
17. Create stripe-webhook Edge Function.
18. Create fetch-health-articles Edge Function.
19. Create import-health-articles Edge Function.
20. Create ChatbotScreen UI.
21. Prepare ai-fitness-assistant Edge Function for OpenAI integration.
22. Test signup, login, contact form, article display, cart, checkout, and webhook payment updates.
```

---

## 50. Testing Checklist

### 50.1 Authentication Testing

```text
User can sign up
User can log in
User session persists after app reload
User can log out
Navigation changes correctly based on auth state
```

### 50.2 Public Screen Testing

```text
Directory screen loads
Public navigation works
Contact form validates inputs
Contact form sends request to Edge Function
ThankYouScreen appears after successful contact submission
```

### 50.3 Member Screen Testing

```text
MemberHomeScreen loads after login
MemberLayout displays header and footer
Footer navigation works
Chatbot button navigates to ChatbotScreen
```

### 50.4 Article Testing

```text
Articles table contains valid rows
Only active articles appear in app
ArticleCard displays image, title, source, and category
ArticleDetailScreen opens selected article
External article link opens in browser
```

### 50.5 Store Testing

```text
Products load from products.js
Store filters work
ProductDetailScreen receives product data
Add to cart works
Cart subtotal calculates correctly
CheckoutScreen validates customer and cart data
```

### 50.6 Stripe Testing

```text
create-checkout-session creates pending order
order_items are inserted
Stripe Checkout URL is returned
Stripe hosted checkout opens
Stripe test payment completes
stripe-webhook receives checkout.session.completed
payment_status updates from pending to paid
```

### 50.7 Edge Function Testing

```text
Each Edge Function validates request body
Each Edge Function returns JSON
External API keys are stored as secrets
Errors are handled without crashing frontend
```

---

## 51. Deployment Notes

The app can be run locally with Expo.

```bash
npx expo start
```

Supabase Edge Functions can be created and deployed through either:

```text
Supabase Dashboard
or
Supabase CLI
```

For this project, Supabase Dashboard-based Edge Function editing and deployment is acceptable.

When deploying Edge Functions:

```text
Add required environment secrets
Deploy function
Test function endpoint
Confirm frontend supabase.functions.invoke() call works
```

For Stripe webhook testing:

```text
Use Stripe Dashboard webhook configuration
Set webhook destination to the deployed stripe-webhook function URL
Disable JWT verification for the webhook function
Copy Stripe webhook signing secret into Supabase function secrets
Send checkout.session.completed test event or complete a sandbox checkout
Confirm order updates to paid
```

---

## 52. Final Implementation Summary

The On Core Fitness mobile application is implemented as a React Native Expo app connected to a Supabase backend. The frontend manages screens, navigation, UI state, cart state, article display, checkout preparation, and chatbot interaction. Supabase manages authentication, database storage, curated articles, order records, and serverless Edge Functions.

The payment system uses Stripe Checkout for secure hosted payments. The frontend sends checkout data to the `create-checkout-session` Edge Function, which creates a pending order and Stripe Checkout Session. Stripe then sends payment confirmation to the `stripe-webhook` Edge Function, which updates the matching order to paid.

The article system uses NewsAPI and Supabase to support curated content. Articles are fetched, filtered, imported, and controlled through the `articles` table using `is_active` and `is_featured` fields. The contact form uses an Edge Function to send email and SMS notifications through Resend and Twilio. The AI Fitness Assistant UI is already structured and can be connected to a future OpenAI-powered Edge Function.

This implementation separates frontend display logic, backend business logic, database storage, and external API integrations. The result is a maintainable, expandable, business-focused mobile application that supports On Core Fitness through customer engagement, member resources, digital checkout, curated content, and future AI-powered features.
