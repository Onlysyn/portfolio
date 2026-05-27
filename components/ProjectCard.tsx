"use client";

import Image from "next/image";
import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    if (isHovered) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered, isInView]);

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="overflow-hidden border border-border bg-background/60"
    >
      <div className="relative aspect-video border-b border-border bg-background">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-500 ease-out ${
            isHovered && isInView ? "opacity-0" : "opacity-100"
          }`}
        />
        {isInView && project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="font-[var(--font-heading)] text-xl">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text/75">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-text/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href={project.liveUrl}
            aria-label={`${project.name} live site`}
            className="inline-flex items-center gap-2 text-sm text-text/80 transition hover:text-accent"
          >
            <ExternalLink size={16} />
            Live
          </Link>
          <Link
            href={project.githubUrl}
            aria-label={`${project.name} GitHub repository`}
            className="inline-flex items-center gap-2 text-sm text-text/80 transition hover:text-accent"
          >
            <Code2 size={16} />
            GitHub
          </Link>
        </div>
      </div>
    </article>
  );
}
