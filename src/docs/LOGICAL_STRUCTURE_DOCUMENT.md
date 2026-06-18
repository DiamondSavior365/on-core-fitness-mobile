# Logical Structure Document

## Project Name

On Core Fitness Mobile Application

## 1. Application Overview

The On Core Fitness mobile application is a cross-platform mobile app built with React Native and Expo. The application is designed for a real fitness business, On Core Fitness, and provides both a public guest experience and an authenticated member experience.

The app separates users into two primary flows:

1. **Guest flow**: Allows non-authenticated users to learn about the gym, view services, explore pricing, submit contact inquiries, and navigate public business information.
2. **Member flow**: Allows authenticated users to access member-only features such as the member dashboard, workout section, progress section, nutrition section, community section, store, checkout, curated articles, and an AI fitness assistant.

The frontend is built with React Native. The backend uses Supabase for authentication, database storage, and Edge Functions. The application also integrates with external services such as Stripe for payments, Resend for email notifications, Twilio for SMS notifications, NewsAPI for health article retrieval, and planned OpenAI API functionality for the AI fitness assistant.

The overall system is designed to centralize gym services, improve member engagement, support digital product sales, and prepare the business for future membership payments and AI-powered member tools.

---

## 2. Primary User Roles

### 2.1 Guest User

A guest user is a visitor who has not signed in or created an account. This user can access public-facing screens that introduce the gym and allow them to contact the business.

Guest users can:

- View general gym information.
- Learn about personal training services.
- View wellness-related information.
- View pricing plans.
- Submit a contact form.
- Navigate to login or signup.
- Reach a thank-you screen after submitting a form.

### 2.2 Member User

A member user is an authenticated user who has signed up or logged in through Supabase Auth. Once authenticated, the app switches from the public navigation stack to the member navigation stack.

Member users can:

- Access the member home dashboard.
- View member-only content sections.
- Browse curated health, fitness, nutrition, recovery, wellness, and sports articles.
- View product listings in the store.
- Open product detail screens.
- Add products to the cart.
- Continue to checkout.
- Complete payment through Stripe Checkout.
- Access the AI Fitness Assistant screen.
- Navigate through workout, progress, nutrition, and community sections.

### 2.3 Admin / Business Owner

The admin or business owner manages backend business data through Supabase. The current app does not require a separate in-app admin dashboard, but the backend supports administrative control through Supabase tables and Edge Functions.

Admin responsibilities include:

- Managing curated articles.
- Activating or deactivating article visibility.
- Marking featured articles.
- Reviewing imported article data.
- Managing store and order-related data.
- Preparing future membership and premium member-only features.

---

## 3. High-Level System Architecture

The application is organized into four primary layers:

1. **Mobile Frontend Layer**

   - Built with React Native and Expo.
   - Handles screen rendering, navigation, forms, member UI, store UI, article UI, and chatbot UI.
   - Communicates with Supabase, Supabase Edge Functions, and browser-based checkout flows.

2. **Authentication and Database Layer**

   - Powered by Supabase.
   - Handles user authentication, session persistence, curated content storage, order records, and order item records.

3. **Serverless Business Logic Layer**

   - Powered by Supabase Edge Functions.
   - Handles secure backend operations such as creating Stripe Checkout Sessions, processing Stripe webhooks, fetching article data, importing article data, sending notifications, and preparing future AI assistant requests.

4. **External Service Layer**

   - Stripe handles secure checkout.
   - Resend handles email notifications.
   - Twilio handles SMS notifications.
   - NewsAPI supplies health and wellness article data.
   - OpenAI API is planned for AI fitness assistant responses.

---

## 4. Frontend Application Structure

The frontend follows a screen-based React Native architecture. Screens are grouped by whether they belong to the public guest experience or the authenticated member experience.

### 4.1 Public Screens

The public screens are visible before login.

Public screens include:

- `DirectoryScreen`
- `PersonalTrainingScreen`
- `WellnessScreen`
- `AboutUsScreen`
- `PricingPlansScreen`
- `ContactUsScreen`
- `ThankYouScreen`
- `LoginScreen`
- `SignUpScreen`

Purpose of public screens:

- Present the business to prospective customers.
- Allow visitors to learn about services.
- Allow users to contact the gym.
- Allow users to create an account or log in.

### 4.2 Member Screens

The member screens are visible only after authentication.

Member screens include:

- `MemberHomeScreen`
- `WorkoutScreen`
- `ProgressScreen`
- `NutritionScreen`
- `CommunityScreen`
- `StoreScreen`
- `FullStoreScreen`
- `ProductDetailScreen`
- `CartScreen`
- `CheckoutScreen`
- `ArticlesTipsScreen`
- `ArticleDetailScreen`
- `ChatbotScreen`

Purpose of member screens:

- Provide a personalized member dashboard.
- Give members access to fitness-related resources.
- Display curated articles and tips.
- Support product browsing and checkout.
- Prepare the app for AI-powered member support.
- Create a foundation for future member-only premium sections.

---

## 5. Navigation Structure

The app uses authentication-based navigation. The active navigation stack depends on whether a Supabase session exists.

### 5.1 Authentication-Based Navigation Logic

The navigation logic follows this structure:

```text
App starts
→ AuthProvider checks Supabase session
→ If no session exists, show Public Stack
→ If session exists, show Member Stack
→ AuthProvider listens for authentication state changes
→ Navigation updates automatically when user logs in or logs out
```

### 5.2 Public Stack

The Public Stack contains screens available to guests.

```text
Public Stack
├── DirectoryScreen
├── PersonalTrainingScreen
├── WellnessScreen
├── AboutUsScreen
├── PricingPlansScreen
├── ContactUsScreen
├── ThankYouScreen
├── LoginScreen
└── SignUpScreen
```

### 5.3 Member Stack

The Member Stack contains screens available to authenticated users.

```text
Member Stack
├── MemberHomeScreen
├── WorkoutScreen
├── ProgressScreen
├── NutritionScreen
├── CommunityScreen
├── StoreScreen
├── FullStoreScreen
├── ProductDetailScreen
├── CartScreen
├── CheckoutScreen
├── ArticlesTipsScreen
├── ArticleDetailScreen
└── ChatbotScreen
```

### 5.4 Member Layout

Most member screens are wrapped with a shared layout component.

The `MemberLayout` component provides:

- A consistent app header.
- A consistent footer navigation section.
- A branded member experience.
- Shared spacing and layout structure across member screens.

The store section uses a more specialized header layout to support store navigation, cart access, and product browsing actions.

---

## 6. Authentication Structure

Authentication is handled through Supabase Auth.

### 6.1 AuthProvider

The app uses an `AuthProvider` to manage authentication state globally.

The `AuthProvider` is responsible for:

- Checking for an existing Supabase session when the app loads.
- Storing the current user session.
- Listening for Supabase auth state changes.
- Updating the app when a user logs in, signs up, or logs out.
- Making the current user available to screens that need user data.

### 6.2 Signup Flow

The signup flow collects user information and creates a Supabase Auth account.

Signup data may include:

- Full name
- Age
- Email
- Password
- Phone number, if required by the flow

Signup flow:

```text
User opens SignUpScreen
→ User enters required account information
→ App calls Supabase signUp
→ Supabase creates authenticated user
→ User metadata is stored with the account
→ AuthProvider receives session update
→ App switches to Member Stack
```

### 6.3 Login Flow

Login flow:

```text
User opens LoginScreen
→ User enters email and password
→ App calls Supabase signInWithPassword
→ Supabase validates credentials
→ Supabase returns session
→ AuthProvider stores session
→ App switches to Member Stack
```

### 6.4 Session Persistence

Supabase manages session persistence. When the app is reopened, the `AuthProvider` checks whether a valid session already exists. If a valid session exists, the user is routed directly into the member experience.

---

## 7. Database Structure

The app uses Supabase Postgres tables to store business data, curated content, and checkout records.

The main tables are:

- `articles`
- `orders`
- `order_items`

Future tables may include:

- `memberships`
- `profiles`
- `chat_messages`
- `sports_predictions`
- `sports_prediction_results`
- `member_preferences`

---

## 8. Articles Table

The `articles` table stores curated health, fitness, nutrition, recovery, wellness, and sports-related articles.

### 8.1 Purpose

The purpose of this table is to allow the business to control which articles appear inside the app. Instead of showing every article returned by an external API, the app can display selected articles that are active and relevant to On Core Fitness members.

### 8.2 Important Fields

```text
articles
├── id
├── title
├── description
├── image_url
├── source
├── url
├── category
├── published_at
├── is_active
└── is_featured
```

### 8.3 Field Descriptions

- `id`: Unique identifier for each article.
- `title`: Article headline.
- `description`: Short article summary.
- `image_url`: Image displayed on article cards.
- `source`: Name of the article source.
- `url`: External article link. This should be unique to prevent duplicates.
- `category`: Article category, such as Health, Nutrition, Recovery, Wellness, Fitness, or Sports.
- `published_at`: Date and time the article was published.
- `is_active`: Controls whether the article appears in the app.
- `is_featured`: Controls whether the article can appear in featured sections, such as the member home screen.

### 8.4 Article Visibility Logic

```text
Frontend requests articles
→ Supabase query filters where is_active = true
→ Results are ordered by published_at descending
→ ArticleCard components render article previews
→ Featured sections may filter where is_featured = true
```

---

## 9. Orders Table

The `orders` table stores checkout-level customer order records.

### 9.1 Purpose

The purpose of this table is to track a customer order before, during, and after Stripe Checkout. An order is first created with a pending payment status. After Stripe confirms successful checkout through a webhook, the order is updated to paid.

### 9.2 Important Fields

```text
orders
├── id
├── user_id
├── customer_name
├── customer_email
├── customer_phone
├── subtotal
├── payment_status
├── stripe_session_id
└── created_at
```

### 9.3 Field Descriptions

- `id`: Unique order identifier.
- `user_id`: Supabase authenticated user ID connected to the order.
- `customer_name`: Customer name used during checkout.
- `customer_email`: Customer email used during checkout.
- `customer_phone`: Customer phone number used during checkout.
- `subtotal`: Total price before any future tax, shipping, or discount logic.
- `payment_status`: Payment status, such as `pending` or `paid`.
- `stripe_session_id`: Stripe Checkout Session ID.
- `created_at`: Timestamp for when the order was created.

---

## 10. Order Items Table

The `order_items` table stores individual products inside each order.

### 10.1 Purpose

The purpose of this table is to preserve the exact products purchased in each checkout session. Each order can contain multiple order items.

### 10.2 Important Fields

```text
order_items
├── order_id
├── product_id
├── product_name
├── unit_price
├── quantity
└── line_total
```

### 10.3 Field Descriptions

- `order_id`: Foreign key connected to the parent order.
- `product_id`: Product identifier from the frontend product data.
- `product_name`: Name of the purchased product.
- `unit_price`: Price of a single unit.
- `quantity`: Number of units purchased.
- `line_total`: Unit price multiplied by quantity.

---

## 11. Store Product Structure

Current store product data is stored locally in the frontend in a product data file.

### 11.1 Product Data File

The app uses a local file such as:

```text
src/data/products.js
```

This file stores product objects used by the store, product details, cart, and checkout screens.

### 11.2 Product Object Fields

Each product may include:

```text
product
├── id
├── name
├── brand
├── price
├── oldPrice
├── discountLabel
├── description
├── category
├── image
├── isOnSale
├── isFeatured
└── isPopular
```

### 11.3 Product Categories and Filters

The store can organize products into sections such as:

- Flash Sale
- Featured Products
- Popular Items
- All Products

Example frontend filter logic:

```text
flashSaleProducts = products where isOnSale = true
featuredProducts = products where isFeatured = true
popularProducts = products where isPopular = true
allProducts = all available products
```

---

## 12. Reusable Frontend Components

The app uses reusable components to avoid duplicating UI logic.

### 12.1 ArticleCard

The `ArticleCard` component displays article preview information.

It may display:

- Article image
- Category label
- Source name
- Article title
- Description preview
- Published date or metadata

ArticleCard flow:

```text
ArticlesTipsScreen fetches article data
→ ArticleCard receives article object as prop
→ ArticleCard displays image, title, category, and source
→ User taps card
→ App navigates to ArticleDetailScreen
```

### 12.2 ProductCard

The `ProductCard` component displays product preview information.

It may display:

- Product image
- Product name
- Brand
- Price
- Old price
- Discount label
- Sale or featured status

ProductCard flow:

```text
StoreScreen loads products
→ ProductCard receives product object as prop
→ ProductCard displays product summary
→ User taps product
→ App navigates to ProductDetailScreen
```

### 12.3 Chatbot Floating Button

The chatbot floating button appears on the `MemberHomeScreen`.

Purpose:

- Provide quick access to the AI Fitness Assistant.
- Keep the assistant visible without placing it in every app section.
- Navigate users to `ChatbotScreen`.

Flow:

```text
Member opens MemberHomeScreen
→ Floating chatbot button appears near bottom-right
→ User taps button
→ App navigates to ChatbotScreen
```

### 12.4 Member Header and Footer

The member header and footer create a consistent authenticated app experience.

The header may include:

- App branding
- Logo
- Screen title or navigation controls

The footer may include:

- Home tab
- Progress tab
- Meals or nutrition tab
- Store tab

---

## 13. Supabase Edge Functions

The app uses Supabase Edge Functions to perform backend operations that should not be handled directly inside the frontend.

Main Edge Functions:

- `create-checkout-session`
- `stripe-webhook`
- `fetch-health-articles`
- `import-health-articles`
- Contact form notification function
- Planned AI assistant function

---

## 14. create-checkout-session Edge Function

### 14.1 Purpose

The `create-checkout-session` Edge Function creates a Stripe Checkout Session and stores a pending order in Supabase before sending the user to Stripe.

### 14.2 Input Data

The frontend sends:

```text
userId
customerName
customerEmail
customerPhone
cartItems
subtotal
```

### 14.3 Backend Logic

```text
Receive checkout request from CheckoutScreen
→ Validate customer and cart data
→ Create pending order in orders table
→ Insert each cart item into order_items table
→ Create Stripe Checkout Session
→ Store stripe_session_id in matching order
→ Return Stripe Checkout URL to frontend
```

### 14.4 Output Data

The function returns:

```text
checkoutUrl
```

The frontend then opens the hosted Stripe Checkout URL.

---

## 15. stripe-webhook Edge Function

### 15.1 Purpose

The `stripe-webhook` Edge Function receives Stripe webhook events and updates internal payment records after payment completion.

### 15.2 Event Handled

The main event handled is:

```text
checkout.session.completed
```

### 15.3 Backend Logic

```text
Stripe sends checkout.session.completed event
→ Edge Function receives webhook request
→ Function verifies Stripe webhook signature
→ Function extracts Stripe Checkout Session ID
→ Function finds matching order using stripe_session_id
→ Function updates payment_status from pending to paid
```

### 15.4 Security Note

JWT verification is disabled for the Stripe webhook endpoint because Stripe must be able to call the function externally. Instead of Supabase JWT verification, the webhook uses Stripe signature verification with the Stripe webhook secret.

---

## 16. fetch-health-articles Edge Function

### 16.1 Purpose

The `fetch-health-articles` Edge Function fetches article content from NewsAPI and returns filtered health, fitness, nutrition, recovery, wellness, and sports-related content.

### 16.2 Backend Logic

```text
Frontend requests articles
→ Edge Function calls NewsAPI
→ Function filters out irrelevant articles
→ Function prioritizes articles with usable images
→ Function maps articles into app-friendly objects
→ Function returns article list to frontend
```

### 16.3 Filtering Rules

The function is designed to prioritize articles related to:

- Health
- Fitness
- Nutrition
- Recovery
- Wellness
- Sports

The function can reject or skip articles that:

- Are missing required image data.
- Are unrelated to fitness or wellness.
- Do not match allowed content terms.

---

## 17. import-health-articles Edge Function

### 17.1 Purpose

The `import-health-articles` Edge Function imports filtered articles into the Supabase `articles` table.

### 17.2 Backend Logic

```text
Admin triggers import function
→ Function calls NewsAPI
→ Function filters results
→ Function skips articles without images
→ Function checks duplicate URLs
→ Function inserts new articles into articles table
→ Admin can later control visibility using is_active and is_featured
```

### 17.3 Duplicate Prevention

The `url` field in the `articles` table should be unique. This prevents the same article from being imported multiple times.

---

## 18. Contact Form Notification Flow

The public contact form allows guests to submit inquiries to the gym.

### 18.1 Frontend Flow

```text
Guest opens ContactUsScreen
→ Guest enters name, email, phone, and message
→ Frontend validates required fields
→ Frontend formats phone number if needed
→ Frontend calls contact form Edge Function
```

### 18.2 Backend Flow

```text
Edge Function receives contact form data
→ Function sends email notification through Resend
→ Function sends SMS notification through Twilio
→ Function returns success response
→ Frontend navigates to ThankYouScreen
```

### 18.3 Business Purpose

This flow allows On Core Fitness to receive customer inquiries without relying only on phone calls, social media messages, or manual in-person communication.

---

## 19. Planned AI Fitness Assistant Structure

The app includes a `ChatbotScreen` frontend UI for an AI Fitness Assistant. The current structure prepares the app for future OpenAI API integration.

### 19.1 Current Chatbot UI

The chatbot screen includes:

- Header with back navigation.
- Hero card with AI assistant branding.
- Quick prompt buttons.
- Quick note card.
- Conversation message list.
- Input bar.
- Send button.

### 19.2 Planned Backend Flow

```text
Member opens ChatbotScreen
→ Member types a fitness-related question
→ Frontend sends message and userId to AI Edge Function
→ Edge Function validates request
→ Edge Function sends prompt to OpenAI API
→ OpenAI returns assistant response
→ Edge Function returns response to frontend
→ Frontend displays assistant message
→ Optional future step stores message history in Supabase
```

### 19.3 Planned AI Assistant Data

Future AI assistant storage may use a table such as:

```text
chat_messages
├── id
├── user_id
├── role
├── message
├── created_at
└── metadata
```

Possible `role` values:

- `user`
- `assistant`
- `system`

---

## 20. Articles User Flow

The articles section displays curated article content to members.

### 20.1 Member Home Article Preview Flow

```text
Member opens MemberHomeScreen
→ Frontend fetches curated active articles
→ App selects top articles for preview
→ ArticleCard components display article previews
→ User taps article
→ App navigates to ArticleDetailScreen
```

### 20.2 See All Articles Flow

```text
Member taps Articles & Tips section
→ App navigates to ArticlesTipsScreen
→ Frontend fetches active articles from Supabase
→ Articles are ordered by published_at descending
→ Up to the selected display limit are shown
→ User taps an article
→ App opens ArticleDetailScreen
```

### 20.3 Article Detail Flow

```text
User opens ArticleDetailScreen
→ Screen displays title, image, source, category, and description
→ User chooses to open full article
→ App opens external article URL using Expo Web Browser
```

---

## 21. Store and Checkout User Flow

The store allows members to browse products and complete checkout.

### 21.1 Store Browsing Flow

```text
Member opens StoreScreen
→ Frontend loads product data from products.js
→ Store displays product sections
→ User selects Flash Sale, Featured Products, Popular Items, or All Products
→ ProductCard components display filtered products
→ User taps product
→ App navigates to ProductDetailScreen
```

### 21.2 Product Detail Flow

```text
User opens ProductDetailScreen
→ Screen receives selected product data
→ Product image, name, brand, price, and description are displayed
→ User selects quantity if supported
→ User adds product to cart
→ Cart state updates
```

### 21.3 Cart Flow

```text
User opens CartScreen
→ Cart displays selected products
→ User can review product names, prices, quantities, and line totals
→ Cart calculates subtotal
→ User continues to CheckoutScreen
```

### 21.4 Checkout Flow

```text
User opens CheckoutScreen
→ App prepares customer and cart data
→ User taps Continue to Payment
→ Frontend calls create-checkout-session Edge Function
→ Edge Function creates pending order
→ Edge Function creates Stripe Checkout Session
→ Frontend opens hosted Stripe Checkout page
→ User completes payment
→ Stripe sends webhook to stripe-webhook function
→ stripe-webhook updates order payment_status to paid
```

---

## 22. Payment Status Flow

The payment status flow ensures that the app records the difference between an attempted checkout and a completed payment.

```text
Checkout begins
→ Order is created with payment_status = pending
→ Stripe Checkout Session is created
→ stripe_session_id is saved to order
→ User completes Stripe Checkout
→ Stripe sends checkout.session.completed webhook
→ stripe-webhook verifies event
→ Matching order is found
→ payment_status changes from pending to paid
```

This structure prevents the app from marking an order as paid before Stripe confirms the payment.

---

## 23. External Services

### 23.1 Supabase

Supabase is used for:

- Authentication
- Session management
- Postgres database
- Article storage
- Order storage
- Order item storage
- Edge Functions

### 23.2 Stripe

Stripe is used for:

- Hosted checkout
- Payment processing
- Checkout Sessions
- Webhook payment confirmation
- Future membership checkout flows

### 23.3 Resend

Resend is used for:

- Sending email notifications from guest contact form submissions.
- Notifying the business when a prospective customer submits a message.

### 23.4 Twilio

Twilio is used for:

- Sending SMS notifications from guest contact form submissions.
- Alerting business contacts when a new inquiry is received.

### 23.5 NewsAPI

NewsAPI is used for:

- Fetching health and wellness article data.
- Supplying external content for filtering and curation.
- Supporting the Articles & Tips section.

### 23.6 OpenAI API

OpenAI API is planned for:

- AI Fitness Assistant responses.
- Personalized fitness guidance.
- Member-facing chatbot interactions.
- Future AI-powered insights.

---

## 24. Data Flow Summary

### 24.1 Authentication Data Flow

```text
App.js
→ AuthProvider loads
→ Supabase checks current session
→ Session state is stored globally
→ AppNavigator chooses Public Stack or Member Stack
→ User login/signup changes session state
→ Navigation updates automatically
```

### 24.2 Contact Form Data Flow

```text
ContactUsScreen
→ User submits contact form
→ Frontend validates form data
→ Edge Function receives form data
→ Resend sends email
→ Twilio sends SMS
→ Function returns success
→ User is routed to ThankYouScreen
```

### 24.3 Article Data Flow

```text
NewsAPI
→ fetch-health-articles or import-health-articles Edge Function
→ Filtering and formatting
→ Supabase articles table
→ Frontend fetches active curated articles
→ ArticleCard displays content
→ ArticleDetailScreen opens full article
```

### 24.4 Store Checkout Data Flow

```text
products.js
→ StoreScreen displays products
→ ProductDetailScreen shows selected product
→ CartScreen stores selected cart items
→ CheckoutScreen sends cart data to create-checkout-session
→ Supabase creates pending order and order items
→ Stripe creates Checkout Session
→ User pays through Stripe
→ Stripe webhook confirms payment
→ Supabase order updates to paid
```

### 24.5 AI Assistant Data Flow

```text
ChatbotScreen
→ User submits message
→ Planned AI Edge Function receives message
→ Function sends prompt to OpenAI API
→ OpenAI returns assistant response
→ Function returns response to frontend
→ ChatbotScreen displays conversation
→ Optional future database storage saves chat history
```

---

## 25. Screen-to-Feature Mapping

```text
DirectoryScreen
→ Public business directory and entry point

PersonalTrainingScreen
→ Public personal training information

WellnessScreen
→ Public wellness service information

AboutUsScreen
→ Public gym background and business information

PricingPlansScreen
→ Public pricing and membership plan information

ContactUsScreen
→ Public lead capture and contact form

ThankYouScreen
→ Confirmation after contact submission

LoginScreen
→ Existing user authentication

SignUpScreen
→ New user account creation

MemberHomeScreen
→ Main authenticated dashboard

WorkoutScreen
→ Member workout section

ProgressScreen
→ Member progress tracking section

NutritionScreen
→ Member nutrition section

CommunityScreen
→ Member community section

StoreScreen
→ Main store browsing section

FullStoreScreen
→ Expanded product listing section

ProductDetailScreen
→ Individual product details

CartScreen
→ Selected cart items and subtotal

CheckoutScreen
→ Customer checkout preparation and Stripe redirect

ArticlesTipsScreen
→ Full curated article list

ArticleDetailScreen
→ Individual article detail and external article opening

ChatbotScreen
→ AI Fitness Assistant interface
```

---

## 26. Future Expansion Structure

The current architecture supports future expansion without requiring a complete rebuild.

Possible future features include:

- Membership payment checkout.
- Member-only access gating based on paid subscription status.
- Admin dashboard for managing articles and products.
- AI fitness assistant with OpenAI API integration.
- Persistent chatbot conversation history.
- Sports prediction and AI insights section.
- Algorithm success rate tracking.
- Premium member-only sports insights.
- Location-based Stripe tax calculation.
- Push notifications.
- Improved analytics for user engagement.

---

## 27. Future Sports Insights Structure

The app is planned to include a sports insights section for members.

### 27.1 Purpose

The sports section will go beyond displaying basic sports statistics. The goal is to analyze larger datasets, generate game predictions, provide AI-powered insights, and share the algorithm success rate with members.

### 27.2 Planned Sports Flow

```text
Member opens Sports section
→ App fetches sports data from external sports API
→ App displays teams, games, stats, and logos
→ Backend or AI system analyzes trends and historical data
→ Prediction algorithm generates game insights
→ App displays predictions, trends, confidence, and success rate
→ Premium members access advanced sports betting insights
```

### 27.3 Possible Future Tables

```text
sports_games
├── id
├── league
├── home_team
├── away_team
├── game_time
├── home_team_logo
├── away_team_logo
└── status

sports_predictions
├── id
├── game_id
├── predicted_winner
├── confidence_score
├── prediction_reason
├── created_at
└── result_status

sports_prediction_results
├── id
├── prediction_id
├── actual_winner
├── was_correct
├── evaluated_at
└── notes
```

---

## 28. Security and Separation of Responsibilities

The app separates sensitive backend operations from frontend display logic.

### 28.1 Frontend Responsibilities

The frontend is responsible for:

- Rendering screens.
- Managing navigation.
- Displaying user interface components.
- Collecting user input.
- Calling Supabase queries and Edge Functions.
- Opening external checkout or article links.

### 28.2 Backend Responsibilities

The backend is responsible for:

- Authenticating users.
- Storing database records.
- Creating Stripe Checkout Sessions.
- Processing Stripe webhook events.
- Sending email and SMS notifications.
- Fetching and importing article data.
- Preparing future AI assistant responses.

### 28.3 External Service Responsibilities

External services are responsible for:

- Processing payments through Stripe.
- Sending email through Resend.
- Sending SMS through Twilio.
- Providing article data through NewsAPI.
- Generating AI responses through the planned OpenAI integration.

---

## 29. Algorithmic Regeneration Blueprint

This document is structured so an AI agent can regenerate the application architecture by following these steps:

```text
1. Create a React Native Expo mobile application.
2. Add Supabase client configuration.
3. Create an AuthProvider to manage Supabase sessions.
4. Create an AppNavigator that switches between Public Stack and Member Stack.
5. Build public screens for gym information, pricing, contact, login, and signup.
6. Build member screens for dashboard, workout, progress, nutrition, community, store, articles, and chatbot.
7. Create a reusable MemberLayout with shared header and footer.
8. Create reusable ArticleCard and ProductCard components.
9. Create local product data in products.js.
10. Create Supabase tables for articles, orders, and order_items.
11. Create Supabase Edge Function for contact form notifications.
12. Create Supabase Edge Function for creating Stripe Checkout Sessions.
13. Create Supabase Edge Function for processing Stripe webhooks.
14. Create Supabase Edge Function for fetching health articles.
15. Create Supabase Edge Function for importing health articles into the database.
16. Connect StoreScreen, ProductDetailScreen, CartScreen, and CheckoutScreen to the checkout flow.
17. Connect ArticlesTipsScreen and ArticleDetailScreen to the articles table.
18. Add chatbot frontend UI and prepare backend OpenAI function integration.
19. Add future expansion points for membership gating, sports insights, and AI-powered features.
```

---

## 30. System Architecture Summary

The On Core Fitness mobile application uses a mobile-first architecture with a React Native frontend, Supabase backend, serverless Edge Functions, and third-party service integrations. The frontend handles user interface rendering, navigation, form input, product display, cart behavior, article display, and chatbot interaction. Supabase handles authentication, database storage, session state, curated content, order records, and Edge Function execution.

Stripe is used for secure payment checkout, while Stripe webhooks are used to confirm completed payments and update internal order records. Resend and Twilio support business communication through email and SMS notifications. NewsAPI supports health article content, and the planned OpenAI integration will power the AI Fitness Assistant.

This architecture separates the application into clear layers: frontend UI, authentication, database storage, serverless business logic, and external services. This makes the app easier to maintain, extend, test, and regenerate from Markdown documentation. The structure also supports future business growth through membership payments, premium member sections, AI-powered support, sports insights, and improved customer engagement tools.
