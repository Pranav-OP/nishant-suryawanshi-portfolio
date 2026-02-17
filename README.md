# Personal Portfolio Website

A modern, minimal, and fully responsive **single-page portfolio website** built with React.  
The website is designed to be clean, fast, and professional, with subtle animations and an ambient background to make it feel alive without being distracting.

This portfolio is ideal for **Data Analysts, IT Professionals, and Engineers** looking to showcase their profile online.

---

## 🚀 Live Demo
<https://nishantsuryawanshicv.netlify.app/>
---

## 🛠 Tech Stack

### Frontend
- **React (Vite)** – Fast development and optimized production build
- **JavaScript (ES6+)**
- **CSS (Vanilla CSS)** – No heavy UI frameworks

### Styling & UI
- **CSS Variables** – Theme-aware design (Light/Dark mode)
- **Google Fonts (Inter)** – Clean, modern typography
- **Responsive Design** – Mobile-first approach
- **react-icons** – Lightweight social media icons

### Animations & Effects
- **Intersection Observer API** – Fade-in animations on scroll
- **Pure CSS Animations** – Ambient floating background
- **CSS Transitions** – Hover and interaction effects

### Data Handling
- **Static JSON (`data.json`)** – Resume data stored locally
- **No Backend / No Database**

### Deployment
- **Vercel / Netlify (Free Hosting)**

---

## ✨ Features

### 🌗 Light & Dark Mode
- Toggle available directly in the navigation bar
- Theme-aware colors across the entire site

### 🧭 Sticky Navigation Bar
- Center-aligned navigation links
- Hamburger menu on mobile devices
- Smooth scrolling between sections

### 🎯 Resume-Driven Content
All content is dynamically loaded from a single `data.json` file:
- Hero / Introduction
- Experience
- Education
- Technical Skills
- Certifications
- Language Proficiency

### 📄 Resume Download CTA
- Downloadable PDF resume directly from the hero section

### 🧠 Skills Showcase
- Categorized skill sections
- Individual skill cards
- Hover and motion effects
- Mobile-friendly grid layout

### 🎬 Subtle Scroll Animations
- Sections fade in as they enter the viewport
- Lightweight and performance-friendly

### 🌌 Live Ambient Background
- Floating, blurred orbs for a calm and modern feel
- Responsive sizing for mobile devices
- Pure CSS (no canvas, SVGs, or heavy libraries)

### 🔗 Social Media Footer
- LinkedIn, Instagram, Twitter icons
- Minimal hover animations
- Theme-aware styling

### 📱 Fully Responsive
- Optimized for desktop, tablet, and mobile
- Adaptive navigation and background effects

---

## 📁 Project Structure

```
src/
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── Experience.jsx
│ ├── Education.jsx
│ ├── Skills.jsx
│ ├── Certifications.jsx
│ ├── Languages.jsx
│ └── Footer.jsx
│
├── hooks/
│ └── useFadeIn.js
│
├── styles/
│ └── global.css
│
├── App.jsx
└── main.jsx
```

## 🧪 Getting Started Locally

### Prerequisites
- Node.js installed

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm npm run build
```

## Adding & Pushing latest changes 
### Check the current status
```
git status
```

### Add updated files 
```
git add [filename]
```

### Commit the files 
```
git commit -m "updated footer link"
```

### Push the code to the remote repo
```
git push -u origin main -f
```
