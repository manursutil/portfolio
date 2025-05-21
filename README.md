# 💼 Manuel Rodríguez Sutil — Portfolio

Welcome to my personal developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.  
It showcases my selected projects, skills, and a bit of personality.

---

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + Shadcn/UI
- **Language**: TypeScript
- **Deployment**: Vercel
- **Extras**:
  - Theme switcher (system/light/dark)
  - Email contact form via Nodemailer

---

## 🧱 Features

- ⚡ **Responsive Design** — Works on desktop and mobile
- 🌗 **Theme Toggle** — System theme by default with manual override
- 📬 **Working Contact Form** — Sends email via backend API route
- 🧠 **Featured Projects** — Hand-picked to reflect both technical depth and creativity
- 🧠 **Konami Code Easter Egg** — try it: `↑ ↑ ↓ ↓ ← → ← → B A`
- 🎈 Fun interactive elements like floating balloons, confetti, and sound

---

## 🖼 Preview

![Screenshot of Portfolio](./public/portfolio.png)

---

## 📂 Project Structure

```bash
├── app/
│   ├── components/         # Reusable UI components
│   ├── data/               # Project info
│   ├── hooks/              # Custom hooks (e.g. useKonamiCode)
│   ├── api/                # Contact email endpoint
│   ├── globals.css         # Tailwind + custom animations
│   ├── layout.tsx          # Main layout
│   └── page.tsx            # Homepage layout
├── public/                 # Static assets (images, audio)
├── utils/                  # Send email function
└── README.md
```
