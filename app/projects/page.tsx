import ProjectsSection from "../components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-3 text-sm sm:text-base">
          A selection of my technical work — from machine learning and data
          analysis to modern frontend development. Some are research-driven,
          others are experiments. All reflect how I think and build.
        </p>
      </section>

      <ProjectsSection />
    </div>
  );
}
