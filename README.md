# 🔐 Advanced Authentication System(Auth360) (Production Ready)

A **full-featured, production-ready authentication system** built from scratch using:

- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB
- 🔑 JWT (Access & Refresh Tokens)
- 🌐 Google OAuth
- 🔐 Two-Factor Authentication (2FA)

---

## 🚀 Live Demo

👉 **Live Link:** https://auth360backend.onrender.com

---

## ✨ Features

### 🔐 Authentication & Security
- JWT Authentication (Access Token + Refresh Token)
- Secure HttpOnly cookies
- Token refresh & invalidation system

### 🔁 Token Management
- Refresh tokens with expiration
- Secure logout (token invalidation)
- Token versioning for security

### 📧 Email Verification
- Email verification system
- Blocks unverified users from logging in
- Expiring verification tokens

### 🔑 Password Recovery
- Forgot password flow
- Secure reset password system
- Time-limited reset tokens

### 🌐 Social Login
- Google OAuth integration
- Seamless login using existing JWT system

### 🔐 Two-Factor Authentication (2FA)
- TOTP-based authentication
- Supports:
  - Google Authenticator
  - Authy
- QR code setup

### 👤 Authorization & Access Control
- Protected routes using middleware
- Role-Based Access Control (RBAC)
  - User
  - Admin

### 🧑‍💼 Admin Features
- Secure admin-only APIs
- List all users
- Manage system access

---

## 🧠 What You’ll Learn

- How to design a **real-world authentication system**
- Secure token handling strategies
- Implementing **OAuth + JWT together**
- Building **2FA with TOTP**
- Writing **scalable and maintainable backend code**

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-----------|--------|
| Node.js | Backend runtime |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Otplib | 2FA (TOTP) |
| Nodemailer | Email service |
| Google OAuth | Social login |

---

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/yeasin-riyad/Auth360.git

# Navigate to project
cd your-repo

# Install dependencies
npm install

# Run development server
npm run dev