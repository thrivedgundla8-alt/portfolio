import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink/50">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Designed &amp; built with React, Tailwind &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
