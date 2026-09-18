# Karachi Legal House - Official Web Portal
### Advocates & Legal Consultants | Enterprise Security & Chakra UI System

This is the complete, Git-ready React repository for **Karachi Legal House**, established in 2002 by Senior Advocate Mr. Shamsuddin Rajper (Ex-Deputy Attorney General for Pakistan).

---

## 📂 Repository Structure

```
karachi-legal-house/
├── .gitignore          # Git exclusion rules (node_modules, dist, .env)
├── package.json        # Dependencies & NPM Scripts
├── vite.config.js      # Vite Configuration
├── index.html          # Vite Root & Standalone SPA Entry Point
├── README.md           # Documentation
├── public/             # Static Assets & Advocate Photos
│   ├── farhan.jpg
│   ├── jhangeer shams.jpg
│   └── rahim.jpg
└── src/
    ├── main.jsx        # React DOM Entry
    ├── App.jsx         # App Shell Component
    ├── index.css       # Tailwind & Chakra UI Custom Styles
    ├── utils/
    │   └── security.js # Anti-XSS Sanitizer & Web Crypto SHA-256 Digest Engine
    └── components/     # Modular React Components
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── PracticeAreas.jsx
        ├── CorporateClients.jsx
        ├── Advocates.jsx
        ├── RegionalOffices.jsx
        ├── ConsultationForm.jsx
        ├── SecurityPortal.jsx
        ├── SOCConsole.jsx
        └── Footer.jsx
```

---

## ⚡ Git Commands to Push to GitHub / GitLab

```bash
cd karachi-legal-house
git init
git add .
git commit -m "Initial commit - Karachi Legal House React App with 5 Security Layers"
git branch -M main
git remote add origin <YOUR_GIT_REPO_URL>
git push -u origin main
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

&copy; 2024 Karachi Legal House. All rights reserved.
