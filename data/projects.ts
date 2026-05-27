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
    githubUrl: "https://github.com/Onlysyn/Azbirclothing",
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
  {
    id: "nexusfintech",
    name: "NexusFintech",
    role: "UI design & frontend build",
    description:
      "Trust Meets Innovation — Nexus Fintech simplifies the complexity of Decentralized Finance. Secure, transparent, and built for the future of digital assets. Includes an ecosystem explorer with BTC/ETH/SOL tracker UI.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/nexusfintech/preview.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "mammanhigh",
    name: "Mamman High",
    role: "Frontend (personal project)",
    description:
      "Trust Meets Innovation — Nexus Fintech simplifies the complexity of Decentralized Finance. Secure, transparent, and built for the future of digital assets.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/MammanHigh/Capture.JPG",
    liveUrl: "#",
    githubUrl: "https://github.com/Onlysyn/Dan-Mamman-High",
  },
];
