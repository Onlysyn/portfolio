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
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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
            isHovered && isInView && project.video ? "opacity-0" : "opacity-100"
          }`}
        />
        {project.embedUrl && (
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-2 text-xs uppercase tracking-[0.16em] text-text transition hover:border-accent hover:text-accent"
          >
            <ExternalLink size={14} />
            Preview
          </button>
        )}
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

        <div className="flex flex-wrap gap-4">
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

      {project.embedUrl && isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-background">
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-2 text-xs uppercase tracking-[0.16em] text-text transition hover:border-accent hover:text-accent"
            >
              Close
            </button>
            <iframe
              src={project.embedUrl}
              title={`${project.name} live preview`}
              className="h-[70vh] w-full border-0"
              allow="autoplay; fullscreen; microphoning; camera"
            />
          </div>
        </div>
      )}
    </article>
  );
}
