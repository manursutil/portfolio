import Link from "next/link";
import SelectedProjects from "./components/selectedProjects";
import { Button } from "@/components/ui/button";
import ProfileHeader from "./components/ProfileHeader";
import { TechStack } from "./components/TechStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
