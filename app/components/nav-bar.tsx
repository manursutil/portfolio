"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-4 max-w-5xl mx-auto px-4 py-5">
      <div className="flex items-center space-x-3 md:space-x-6">
        <Link
          href="/"
          className={`text-base transition font-mono px-1 md:px-3 py-1 rounded ${
            pathname === "/"
              ? "bg-primary/10 rounded px-3 py-1"
              : "text-primary"
          }
          hover:bg-primary/10 hover:scale-105
          `}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`text-base transition font-mono px-1 md:px-3 py-1 rounded ${
            pathname === "/projects"
              ? "bg-primary/10 rounded px-3 py-1"
              : "text-primary"
          }
          hover:bg-primary/10 hover:scale-105
          `}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`text-base transition font-mono px-1 md:px-3 py-1 rounded ${
            pathname === "/contact"
              ? "bg-primary/10 rounded px-3 py-1"
              : "text-primary"
          }
          hover:bg-primary/10 hover:scale-105
          `}
        >
          Contact
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
