"use client";

export default function Marquee() {
  const items = ["Brand Strategy", "Product Design", "Web Experiences", "Development", "Motion", "Identity"];
  const doubled = [...items, ...items, ...items];

  return (
    <div className="py-5 border-y border-white/5 overflow-hidden bg-void-950">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 text-sm tracking-[0.2em] uppercase text-void-500">
            {item}
            <span className="ml-8 text-accent/60">●</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
