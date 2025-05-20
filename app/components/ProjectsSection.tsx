"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import { Button } from "@/components/ui/button";

const categories = ["Featured Projects", "Web & UI Projects", "Other Projects"];

export default function ProjectsSection() {
  return (
    <section className="space-y-12 mt-0">
      {" "}
      {categories.map((category) => {
        const filtered = projects.filter((p) => p.category === category);

        if (filtered.length === 0) return null;

        return (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.title}
                  className="rounded-xl overflow-hidden shadow border dark:border-muted bg-white dark:bg-muted/30 text-gray-900 dark:text-white flex flex-col"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col flex-1 justify-between p-4 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {project.description}
                      </p>
                      <p className="text-sm italic mt-2">{project.techStack}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.links.map((link) => (
                        <Button
                          asChild
                          key={link.label}
                          variant="outline"
                          className="text-sm hover:bg-primary/10 hover:scale-105 rounded"
                        >
                          <Link
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label} →
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
