# Project Name

## Stack
- **Next.js**: Main application framework
- **Supabase**: Backend & Database
- **OpenAI**: AI integration & Intelligence
- **Stripe**: Payment processing
- **Resend**: Transactional emails

## Architecture
- `/app`: App router (v15+)
- `/components`: Reusable UI modules
- `/lib`: Helper utilities and API clients
- `/api`: Serverless API routes
- `/styles`: Global and specific styles
- `/public`: Static assets

## Setup

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/rullolabs/YOUR_REPO_NAME
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Copy `.env.example` to `.env.local` and fill in the required keys.

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 🚀 Deployment
Automated via GitHub Actions and Vercel. Push to `main` for production or `dev` for staging.

---
Created by RulloLabs
