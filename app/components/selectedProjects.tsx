import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { projects } from "@/app/data/projects";

export default function SelectedProjects() {
  const selected = projects.slice(0, 2);

  if (selected.length === 0) return null;

  return (
    <div className="mt-10 space-y-8">
      {selected.map((project) => (
        <Card
          key={project.title}
          className="hover:scale-[1.02] transition-transform hover:shadow-xl bg-white border border-gray-200 text-gray-900 dark:bg-muted/30 dark:border-muted dark:text-white"
        >
          <CardHeader className="text-lg font-bold">{project.title}</CardHeader>
          <CardDescription className="px-6">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded"
                quality={90}
                priority
              />
            </div>
            <p>{project.description}</p>
          </CardDescription>
          <CardFooter className="flex flex-col items-start gap-4 text-sm px-6 pb-6">
            <p>
              <span className="font-medium">Tech Stack:</span>{" "}
              {project.techStack}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <Button asChild key={link.label} variant="outline">
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
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
