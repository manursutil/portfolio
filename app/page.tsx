"use client";
import { useState } from "react";
import { useKonamiCode } from "@/app/hooks/useKonamiCode";
import BalloonOverlay from "./components/BalloonOverlay";
import Link from "next/link";
import SelectedProjects from "./components/selectedProjects";
import { Button } from "@/components/ui/button";
import ProfileHeader from "./components/ProfileHeader";
import { TechStack } from "./components/TechStack";
import Footer from "./components/Footer";
import { toast, Toaster } from "sonner";

export default function Home() {
  const [konamiMode, setKonamiMode] = useState(false);

  useKonamiCode(() => {
    setKonamiMode(true);
    setTimeout(() => setKonamiMode(false), 10000); // Auto-reset after 10s
  });

  return (
    <div className={konamiMode ? "konami-mode" : ""}>
      {konamiMode && <BalloonOverlay />}
      <ProfileHeader />
      <section className="mt-20">
        <h2 className="font-bold text-2xl">Selected Projects</h2>
        <SelectedProjects />
        <div className="flex justify-center mt-10">
          <Button
            asChild
            variant="outline"
            className="hover:scale-[1.02] transition-transform hover:shadow-xl  bg-white border border-gray-200 text-gray-900 dark:bg-muted/30 dark:border-muted dark:text-white"
          >
            <Link href="/projects">View all projects</Link>
          </Button>
        </div>
      </section>
      <section className="mt-20">
        <h2 className="font-bold text-2xl">Technologies I use</h2>
        <div>
          <TechStack />
        </div>
      </section>
      <section className="mt-20 flex items-center flex-col">
        <p className="text-sm text-center text-muted-foreground">
          Want to build something together?
        </p>
        <Link href="/contact">
          <Button className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:bg-primary/10 hover:scale-105 rounded">
            Let’s Talk →
          </Button>
        </Link>
      </section>
      <section className="mt-20">
        <Footer />
      </section>
      <div className="fixed bottom-5 right-5 z-50">
        <div className="fixed bottom-5 right-5 z-50">
          <div className="fixed bottom-5 right-5 z-50">
            <span
              className="text-2xl cursor-pointer"
              onClick={() => {
                toast("Try this: ↑ ↑ ↓ ↓ ← → ← → B A");
              }}
              style={{
                animation: "bounce-slow 2s infinite",
                display: "inline-block",
              }}
            >
              🕹️
            </span>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}
