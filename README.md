# Developer Portfolio Template

A modern, fully-featured developer portfolio template built with React, TypeScript, Tailwind CSS, and Framer Motion. Perfect for developers who want a beautiful, customizable portfolio site with zero backend setup required.

## ✨ Features

- 🎨 **Dark/Light Mode** - Automatic theme detection with manual toggle and localStorage persistence
- 📱 **Fully Responsive** - Looks great on mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Fast loading with lazy loading and optimized images
- 🎭 **Smooth Animations** - Elegant micro-interactions powered by Framer Motion
- 📬 **Contact Form** - EmailJS integration for client-side email functionality
- 🎯 **SEO Ready** - Optimized meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant with keyboard navigation and ARIA labels
- 🔧 **Easy to Customize** - Simple JSON-based project data and modular components
- 🚀 **Deploy Ready** - One-command deployment to Vercel or Netlify

## 🎯 Live Demo

[View Live Demo](https://lovable.dev) - Coming soon!

## 📸 Screenshots

![Light Mode Hero](https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80)
*Light Mode - Clean and professional*

![Dark Mode Projects](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80)
*Dark Mode - Easy on the eyes*

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template.git
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🎨 Customization Guide

### 1. Personal Information

Edit the following files to add your information:

**Hero Section** (`src/components/Hero.tsx`):
```tsx
<h1>Hi, I'm <span className="gradient-text">Your Name</span></h1>
<p>Your tagline here...</p>
```

**Footer** (`src/components/Footer.tsx`):
```tsx
<p>© {currentYear} Built with ❤️ by Your Name</p>
```

### 2. Projects

Update your projects in `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Short description...',
    longDescription: 'Detailed description...',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/yourusername/project',
    demoUrl: 'https://your-demo.com',
    featured: true,
  },
  // Add more projects...
];
```

### 3. Contact Form (EmailJS Setup)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials (Service ID, Template ID, Public Key)
5. Update `src/components/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('YOUR_PUBLIC_KEY');

// In handleSubmit function:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  }
);
```

### 4. Theme Customization

Modify colors in `src/index.css`:

```css
:root {
  --primary: 6 182 212; /* Your brand color (HSL) */
  --hero-gradient-start: 6 182 212;
  --hero-gradient-end: 59 130 246;
}
```

### 5. Social Links

Update social media links in `src/components/Hero.tsx` and `src/components/Footer.tsx`:

```tsx
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="mailto:your.email@example.com">Email</a>
```

### 6. Resume/CV

Add your resume PDF to the `public` folder and update the link in `src/components/Hero.tsx`:

```tsx
<a href="/your-resume.pdf" download>Resume</a>
```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository and deploy

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI (shadcn/ui)
- **Form Handling:** React Hook Form + Zod
- **Email:** EmailJS
- **Icons:** Lucide React

## 📁 Project Structure

```
portfolio-template/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base UI components (shadcn)
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── contexts/        # React contexts (Theme)
│   ├── data/           # Project data (projects.ts)
│   ├── pages/          # Route pages
│   ├── App.tsx
│   └── index.css       # Global styles & design tokens
├── public/             # Static assets
└── package.json
```

## 🎯 Component Reusability

All components are designed to be easily extracted and reused in other projects:

- `Button` - Customizable button with variants
- `Card` - Content card with hover effects
- `Badge` - Technology/tag badges
- `Modal` - Accessible modal dialogs
- `ThemeToggle` - Dark/light mode switcher

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Reach out via [email](mailto:hello@example.com)
- Connect on [LinkedIn](https://linkedin.com)

## 🙏 Acknowledgments

- [Lovable](https://lovable.dev) - For the amazing development platform
- [shadcn/ui](https://ui.shadcn.com) - For the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion) - For smooth animations

---

Built with ❤️ using [Lovable](https://lovable.dev)
