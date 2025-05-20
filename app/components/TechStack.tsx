import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMysql,
  SiVercel,
  SiPython,
  SiR,
  SiShadcnui,
  SiSanity,
  SiNumpy,
  SiScikitlearn,
  SiPandas,
  SiJupyter,
} from "react-icons/si";

const technologies = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "SQL", icon: SiMysql },
  { name: "R", icon: SiR },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Shadcn UI", icon: SiShadcnui },
  { name: "Sanity", icon: SiSanity },
  { name: "Vercel", icon: SiVercel },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "NumPy", icon: SiNumpy },
  { name: "SciKit-learn", icon: SiScikitlearn },
  { name: "Pandas", icon: SiPandas },
  { name: "Jupyter", icon: SiJupyter },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-8">
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <Card
            key={tech.name}
            className="bg-white border border-gray-200 text-gray-900 hover:shadow-md p-0 dark:bg-muted/30 dark:border-muted dark:text-white"
          >
            <CardContent className="flex flex-row items-center justify-center gap-2 px-3 py-2">
              <Icon className="text-xl" />
              <span className="text-xs">{tech.name}</span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
