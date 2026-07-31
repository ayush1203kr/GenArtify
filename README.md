# 🖼️ GenArtify – AI Image Generation SaaS

A full-stack AI Image Generation SaaS platform that enables users to generate high-quality images from text prompts using AI. The application features **LLM-powered prompt enhancement with Gemini AI**, secure authentication, credit-based usage, Razorpay payment integration, and a production-ready cloud deployment.

---

## 🚀 Live Demo

**Frontend (Vercel):**  
https://ai-image-generation-saas-platform.vercel.app

**Backend:**  
Node.js & Express deployed on AWS EC2 and securely exposed via Cloudflare Tunnel over HTTPS.

---

# ✨ Features

- 🔐 JWT-based user authentication (Login & Signup)
- 🧠 LLM-powered prompt enhancement using **Gemini AI**
- 🎨 AI image generation using the **ClipDrop API**
- 💳 Credit-based image generation system
- 💰 Razorpay credit purchase with backend payment verification
- 📊 Real-time credit balance updates
- ☁️ Production deployment on AWS EC2 + Vercel
- 🔒 Secure HTTPS communication using Cloudflare Tunnel

---

# 🧠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Gemini AI API
- ClipDrop API
- Razorpay API

### Deployment
- AWS EC2
- Vercel
- Cloudflare Tunnel
- PM2

---

# 🏗️ Project Architecture

```text
                    +----------------------+
                    |      React App       |
                    |   (Vercel Frontend)  |
                    +----------+-----------+
                               |
                        HTTPS Requests
                               |
                               ▼
                 +----------------------------+
                 |     Cloudflare Tunnel      |
                 |      Secure HTTPS Proxy    |
                 +-------------+--------------+
                               |
                               ▼
                  +---------------------------+
                  |    Node.js + Express API  |
                  |       (AWS EC2 Server)    |
                  +-------------+-------------+
                                |
         +----------------------+----------------------+
         |                      |                      |
         ▼                      ▼                      ▼
+----------------+     +----------------+     +----------------+
|   Gemini AI    |     |  ClipDrop API  |     |    Razorpay    |
| Prompt Enhance |     | Image Generate |     | Payment Verify |
+----------------+     +----------------+     +----------------+
                                |
                                ▼
                       +------------------+
                       |    MongoDB       |
                       | Users & Credits  |
                       +------------------+
```

---

# 🔄 Request Flow

```text
User Prompt
      │
      ▼
React Frontend
      │
      ▼
Express Backend
      │
      ▼
Gemini AI
(Prompt Enhancement)
      │
      ▼
Enhanced Prompt
      │
      ▼
ClipDrop API
(Image Generation)
      │
      ▼
Deduct Credit
      │
      ▼
Return Image
      │
      ▼
Frontend
```

---

# 🔐 Security

- JWT Authentication
- Protected API Routes
- Backend-only credit deduction
- Razorpay HMAC SHA-256 payment verification
- Secure CORS configuration
- Environment variables for all API keys
- No sensitive credentials exposed to the frontend

---

# 💳 Credit Workflow

1. User signs up and receives free credits.
2. User enters a prompt.
3. Gemini AI enhances the prompt.
4. ClipDrop generates the image.
5. One credit is deducted only after successful image generation.
6. Users can purchase additional credits through Razorpay.

---

# 🧪 Payments

- Razorpay Test Mode
- Backend payment verification
- Duplicate transaction prevention
- Safe credit updates after successful verification

---

# 📂 Folder Structure

```
GenArtify
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   │     └── geminiService.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/ayush1203kr/ai-image-generation-saas-platform.git
```

## Frontend

```bash
cd client
npm install
npm run dev
```

## Backend

```bash
cd server
npm install
npm start
```

---

# 🔑 Environment Variables

### Server (.env)

```env
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret
CLIPDROP_API=your_clipdrop_api_key
GEMINI_API_KEY=your_gemini_api_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

---

# 👨‍💻 Author

**Ayush Kumar**

Integrated MSc Mathematics & Computing  
Birla Institute of Technology, Mesra

- GitHub: https://github.com/ayush1203kr
- LinkedIn: https://www.linkedin.com/in/ayush-kumar-18a431279

---

## ⭐ If you found this project helpful, consider giving it a Star!

👤 Author

Ayush Kumar
IMSc Mathematics & Computing, BIT Mesra
GitHub: https://github.com/ayush1203kr
