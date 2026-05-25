# Portfolio Website

A modern, responsive portfolio website built with **React** and **Vite**, showcasing UI/UX design projects and frontend development work. This portfolio combines beautiful design with smooth interactions to present your professional work effectively.

## ✨ Features

- **Responsive Design** - Looks great on desktop, tablet, and mobile devices
- **Project Showcase** - Display both UI/UX case studies and frontend development projects
- **Case Studies** - Detailed case study pages with project context, design process, and outcomes
- **Contact Section** - Multiple ways to get in touch (WhatsApp, Telegram, Email, Social Media)
- **Smooth Navigation** - React Router for seamless page transitions
- **Modern Styling** - CSS with gradients, glassmorphism, and hover effects
- **Interactive Elements** - Modal image previews, hover animations, and dynamic content

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: CSS3 (with modern features like gradients and backdrop filters)
- **Package Manager**: npm

## 📁 Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Project.jsx
│   │   ├── Project.css
│   │   ├── Eventify.jsx
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── CraigslistCaseStudy.jsx
│   │   └── CaseStudy.css
│   ├── assets/
│   │   └── (project images and screenshots)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable):
```bash
git clone <your-repo-url>
cd my-app
```

2. **Install dependencies**:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages Overview

### **Home**
Landing page with an introduction and call-to-action to explore your work.

### **About**
Your personal story, skills, and background as a Designer and Developer.

### **Projects**
Main portfolio showcase with two categories:
- **UI/UX Design**: Case studies and design projects
  - Craigslist Redesign (with detailed case study)
  - Eventify (Mobile App Design)
- **Frontend Development**: Web applications and development work
  - Cartify (E-commerce Website with Figma design)
  - Quizzy (Interactive Quiz App with Figma design)
  - My Portfolio Website (This project)

### **Case Studies**
In-depth project documentation including:
- Project overview and goals
- Design process and approach
- Key challenges and solutions
- Final outcomes and learnings
- Interactive Figma prototypes (where available)
- Navigation between projects

### **Contact**
Multiple contact options:
- WhatsApp chat
- Telegram messaging
- Email
- Social media links (GitHub, LinkedIn, Twitter/X)

## 🎨 Customization

### Update Your Projects

Edit `src/pages/Project.jsx` to add, remove, or update projects:

```javascript
const uiuxProjects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "UI/UX Case Study",
    description: "Brief description...",
    image: ImportedImage,
    tags: ["Tag1", "Tag2"],
    hasCaseStudy: true,
    caseStudyLink: "/case-study/your-project",
    year: "2025"
  }
];

const frontendProjects = [
  {
    id: 3,
    title: "Your Project Title",
    category: "Frontend Development",
    description: "Brief description...",
    image: ImportedImage,
    tags: ["React", "Vite"],
    status: "completed",
    liveLink: "https://your-live-url.com",
    githubLink: "https://github.com/EkramJemalH/Portfolio", 
    year: "2025"
  }
];
```

### Customize Styling

Global styles are in `src/index.css`, and each component/page has its own CSS file for modular styling.

## 🔗 Navigation Routes

- `/` - Home page
- `/about` - About page
- `/projects` - Projects showcase
- `/projects/eventify` - Eventify project details
- `/case-study/craigslist` - Craigslist case study
- `/contact` - Contact section

## 📱 Responsive Breakpoints

The portfolio is optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag the dist/ folder to Netlify
```

### Deploy to GitHub Pages

Configure `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
  // ... other config
}
```

Then:
```bash
npm run build
# Push dist/ to gh-pages branch
```

## 📦 Dependencies

- **react**: UI library for building user interfaces
- **react-router-dom**: Client-side routing and navigation
- **vite**: Modern build tool with fast dev server

## 🔍 SEO Optimization Tips

1. Update page titles and meta descriptions in `index.html`
2. Add Open Graph tags for social sharing
3. Ensure all images have descriptive alt text
4. Create a `sitemap.xml` for better indexing
5. Consider adding schema.org structured data

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading
Ensure all CSS imports are relative to the current file and file paths are correct.

### Routes Not Working
Verify all routes are correctly defined in `App.jsx` and match the component file paths.

## 📧 Contact & Social

- **Email**: ekramjemalh@gmail.com
- **GitHub**: [EkramJemalH](https://github.com/EkramJemalH)
- **LinkedIn**: [Ekram Jemalh](https://www.linkedin.com/in/ekram-jemalh-446978317)
- **Twitter/X**: [@ekjemal](https://x.com/ekjemal)
- **Portfolio Repository**: [https://github.com/EkramJemalH/Portfolio](https://github.com/EkramJemalH/Portfolio)

---

Made  by **Ekram Jemalh** | Frontend Developer & UI/UX Designer
