export default function Marquee({ items, className = "", speed = "normal", separator = "✦" }) {
  return (
    <div className={`overflow-hidden mask-fade-x ${className}`}>
      <div className={`marquee-track ${speed === "slow" ? "marquee-slow" : ""}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center shrink-0" aria-hidden={dup === 1}>
            {items.map((it, i) => (
              <span key={`${dup}-${i}`} className="flex items-center gap-8 px-6">
                <span className="whitespace-nowrap">{it}</span>
                <span className="text-accent">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
