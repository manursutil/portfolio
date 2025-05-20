import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";

const links = [
  { name: "GitHub", icon: SiGithub, href: "https://github.com/manursutil/" },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/manuelrodriguezsutil/",
  },
  { name: "Email", icon: SiMaildotru, href: "mailto:mrodsut@gmail.com" },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="inline-flex w-auto p-0 bg-white border border-gray-200 text-gray-900 dark:bg-muted/30 dark:border-muted dark:text-white hover:shadow-md transition rounded">
              <CardContent className="!p-2 flex items-center gap-1 h-auto min-h-0 leading-none hover:bg-primary/10 hover:scale-105 rounded">
                <Icon className="text-sm" />
                <span className="text-xs">{link.name}</span>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
