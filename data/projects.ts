export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  video: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "azbir",
    name: "Azbir Website",
    description:
      "Content-driven marketing site with CMS-backed pages, smooth motion, and form handling.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "Sanity CMS",
      "Formspree",
      "Vercel",
    ],
    image: "/projects/azbir/preview.jpg",
    video: "/projects/azbir/preview.mp4",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "threadx",
    name: "Thread X Dashboard",
    description:
      "Data-heavy dashboard for thread analytics, charting, and PDF export workflows.",
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "Chart.js", "jsPDF", "Vercel"],
    image: "/projects/threadx/preview.jpg",
    video: "/projects/threadx/preview.mp4",
    liveUrl: "#",
    githubUrl: "#",
  },
];
