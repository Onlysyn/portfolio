export type Project = {
  id: string;
  name: string;
  role?: string;
  description: string;
  stack: string[];
  image: string;
  video?: string;
  embedUrl?: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "azbir",
    name: "Azbir Website",
    role: "Frontend development & motion",
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
    image: "/projects/azbir/azbirclothing.JPG",
    embedUrl: "https://azbirclothing.vercel.app/",
    liveUrl: "https://azbirclothing.vercel.app/",
    githubUrl: "#",
  },
  {
    id: "threadx",
    name: "Thread X Dashboard",
    role: "Dashboard UI & data interactions",
    description:
      "Data-heavy dashboard for thread analytics, charting, and PDF export workflows.",
    stack: ["HTML", "CSS", "JavaScript", "Supabase", "Chart.js", "jsPDF", "Vercel"],
    image: "/projects/threadx/thredx.JPG",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "cerdeeqtoonz",
    name: "Cerdeeqtoonz.art",
    role: "Creative web showcase",
    description:
      "Digital illustrator and motion artist showcase site featuring cinematic visuals, animation previews, and brand-led storytelling.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/projects/cerdeeqtoonz/Cerdeeqtoonz.art.JPG",
    embedUrl: "https://cerdeeqtoonz.art/",
    liveUrl: "https://cerdeeqtoonz.art/",
    githubUrl: "#",
  },
];
