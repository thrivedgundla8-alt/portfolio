import Reveal from "./Reveal";
import { certifications, awards, education } from "../data/resume";

export default function Recognition() {
  return (
    <section id="recognition" className="relative px-6 md:px-10 py-24 md:py-32 bg-paper-soft">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">04 / Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Certifications &amp; milestones
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <Reveal className="md:col-span-1">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink/50 mb-5">
              Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c.title} className="rounded-2xl border border-ink/10 p-5 bg-paper">
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-ink/55 mt-1">{c.issuer}</p>
                </li>
              ))}
            </ul>

            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink/50 mb-5 mt-10">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="rounded-2xl border border-ink/10 p-5 bg-paper">
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-ink/55 mt-1">
                    {e.school}, {e.location} · {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink/50 mb-5">
              Awards &amp; Achievements
            </h3>
            <div className="space-y-5">
              {awards.map((a) => (
                <div
                  key={a.title}
                  className="rounded-2xl border border-ink/10 p-6 bg-paper hover:border-ink/25 transition-colors"
                >
                  <p className="font-display font-semibold text-lg">{a.title}</p>
                  <p className="text-ink/65 mt-2 leading-relaxed">{a.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
