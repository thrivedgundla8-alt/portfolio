import Reveal from "./Reveal";
import { profile } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4" as="div">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">01 / About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 leading-[1.05]">
            Building resilient
            <br /> software, end to end.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl leading-relaxed text-ink/75">
            {profile.summary}
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-ink/10 p-6 hover:border-ink/30 transition-colors">
              <h3 className="font-display text-xl font-semibold">Backend Engineering</h3>
              <p className="text-ink/60 mt-2 text-sm leading-relaxed">
                Spring Boot microservices, event-driven systems with Kafka, and the Saga pattern
                for reliable distributed transactions.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 p-6 hover:border-ink/30 transition-colors">
              <h3 className="font-display text-xl font-semibold">Frontend Craft</h3>
              <p className="text-ink/60 mt-2 text-sm leading-relaxed">
                Reusable, tested React component systems built for real production
                workflows — from lending platforms to tender lifecycle tools.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 p-6 hover:border-ink/30 transition-colors">
              <h3 className="font-display text-xl font-semibold">DevOps &amp; Delivery</h3>
              <p className="text-ink/60 mt-2 text-sm leading-relaxed">
                Docker &amp; Kubernetes deployments, CI/CD pipelines, and Agile/Scrum
                delivery with 95%+ sprint adherence.
              </p>
            </div>
            <div className="rounded-2xl border border-ink/10 p-6 hover:border-ink/30 transition-colors">
              <h3 className="font-display text-xl font-semibold">AI-Augmented Workflow</h3>
              <p className="text-ink/60 mt-2 text-sm leading-relaxed">
                GitHub Copilot, Claude &amp; ChatGPT for code review, test generation,
                debugging, and technical documentation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
