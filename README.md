# CUBOPS AI-COMPANION

## Conversational Universe of Behavioral and Emotion Optimization for Personality Simulation (CUBEOPS)

This repository contains the source code for building a SaaS AI-COMPANION Platform using **Next.js 13**, **React**, **Tailwind CSS**, **TypeScript**, **Prisma**, **PostgreSQL**, and **Stripe**.

---

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Setup Prisma](#setup-prisma)
  - [Start the App](#start-the-app)
- [Available Commands](#available-commands)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

### **Tailwind Design**
- Fully styled using **Tailwind CSS**.
- Integrated with **Tailwind animations** for a polished user interface.

### **Full Responsiveness**
- Optimized for **seamless display** across devices, ensuring a great user experience.

### **Authentication**
- Utilizes **Clerk Authentication** with support for **Email** and **Google**.

### **Form Validation**
- Implements **react-hook-form** for intuitive client-side form validation and management.

### **Error Handling**
- Includes **react-toast** for server-side error handling and user notifications.

### **Page Loading State**
- Ensures a smooth user experience with optimized page loading indicators.

### **Subscription Management**
- Fully integrated with **Stripe** to handle subscription payments, including:
  - Monthly subscriptions
  - Token-based top-ups
  - Time-based call plans

### **Route Handlers**
- Implements `POST`, `GET`, and `DELETE` API endpoints using **Next.js route handlers**.

### **Server-Side Data Fetching**
- Fetches data directly in server-side React components, eliminating the need for intermediate APIs.

### **Component Relationships**
- Manages relationships between **parent** and **child components** efficiently.

### **Layout Reusability**
- Features reusable layouts for consistent and modular application design.

### **Next.js 13 App Router**
- Organizes the application using the **Next.js 13 App Router** and modern folder structure.

### **Image Uploads**
- Integrated with **Cloudinary** for secure and efficient image hosting and management.

### **LLM Integration**
- Utilizes **OpenAI APIs** for advanced AI-driven features, such as personality simulation.

---

## Prerequisites
- **Node.js**: Ensure you have **Node.js 18.x.x** installed.
- **PostgreSQL Database**: Set up a **cloud-hosted PostgreSQL** database for application data.
- **Stripe Account**: Obtain necessary API keys for subscription management.
- **Clerk Account**: Configure Clerk for authentication.

---

## Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/VALASALARAKESH/AI-COMPANION-V2.git
cd AI-COMPANION-V2
```

### **2. Install Packages**
Install all dependencies using `npm`:
```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

| Variable Name                          | Description                                                                 |
|----------------------------------------|-----------------------------------------------------------------------------|
| `TOKENS_TOPUP_PRICE_ID`                | Price ID for tokens top-up.                                                |
| `CALLTIME_TOPUP_5_PRICE_ID`            | Price ID for 5 minutes call time top-up.                                   |
| `CALLTIME_TOPUP_10_PRICE_ID`           | Price ID for 10 minutes call time top-up.                                  |
| `CALLTIME_TOPUP_30_PRICE_ID`           | Price ID for 30 minutes call time top-up.                                  |
| `UNLIMITED_SUB_PRICE_ID`               | Price ID for unlimited subscription.                                       |
| `PRO_SUB_PRICE_ID`                     | Price ID for pro subscription.                                             |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`    | Publishable key for Clerk authentication.                                  |
| `CLERK_SECRET_KEY`                     | Secret key for Clerk authentication.                                       |
| `DATABASE_URL`                         | Connection string for PostgreSQL database.                                 |
| `NEXT_PUBLIC_APP_URL`                  | Base URL of the application.                                               |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`    | Cloud name for Cloudinary image uploads.                                   |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Upload preset for Cloudinary.                                              |
| `STRIPE_API_KEY`                       | API key for Stripe payment processing.                                     |
| `STRIPE_WEBHOOK_SECRET`                | Webhook secret for Stripe.                                                 |
| `NEXT_PUBLIC_OPENAI_API_KEY`           | API key for OpenAI integration.                                            |

---

### **Setup Prisma**

1. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

2. Push the database schema to your PostgreSQL database:
   ```bash
   npx prisma db push
   ```

3. Seed the database with initial data:
   ```bash
   node scripts/seed_phone_voices_bolna.js
   ```

---

### **Start the App**

Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Available Commands

Run these commands with `npm run [command]`:

| Command  | Description                                |
|----------|--------------------------------------------|
| `dev`    | Starts a development instance of the app. |

---

## Contributing

We welcome contributions! If you'd like to contribute, please:
1. Fork this repository.
2. Create a new branch with your feature or fix.
3. Submit a pull request for review.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, please contact **Rakesh Valasala**:
- **Email**: [valasalarakesh1254@gmail.com](mailto:valasalarakesh1254@gmail.com)
- **LinkedIn**: [linkedin.com/in/rakeshvalasala](https://www.linkedin.com/in/rakeshvalasala/) 

---
