export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
    longDescription: 'Built a comprehensive e-commerce platform featuring product catalog, shopping cart, secure checkout with Stripe integration, admin dashboard for inventory management, and real-time order tracking. Implemented responsive design and optimized for performance with lazy loading and image optimization.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'AI Task Management',
    description: 'Smart task manager with AI-powered prioritization and natural language processing.',
    longDescription: 'Developed an intelligent task management application that uses machine learning to automatically prioritize tasks based on deadlines, importance, and user behavior patterns. Features include natural language input processing, smart notifications, team collaboration tools, and detailed analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Real-Time Chat Application',
    description: 'Modern chat app with WebSocket support, file sharing, and end-to-end encryption.',
    longDescription: 'Created a secure real-time messaging platform with features including one-on-one and group chats, file and image sharing, typing indicators, read receipts, and end-to-end encryption. Built with WebSocket for instant message delivery and optimized for low-latency communication.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
    technologies: ['React', 'Socket.io', 'Node.js', 'Redis', 'Express'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with interactive maps, forecasts, and location-based alerts.',
    longDescription: 'Designed and developed a comprehensive weather dashboard featuring current conditions, 7-day forecasts, interactive weather maps, severe weather alerts, and historical weather data visualization. Integrated multiple weather APIs for accurate and reliable data, with offline support using service workers.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet', 'PWA'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.com',
    featured: false,
  },
];
