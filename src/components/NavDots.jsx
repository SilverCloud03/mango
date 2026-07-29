import { useState, useEffect } from 'react';

const dots = [
  { id: 'start', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'transport', label: 'Доставка' },
  { id: 'contacts', label: 'Контакты' },
];

export default function NavDots({ revealed }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = dots.map((d) => document.getElementById(d.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        }
      },
      { root: document.getElementById('scroll-root'), threshold: 0.3 }
    );
    els.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [revealed]);

  return (
    <div className={`fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 transition-opacity duration-700 ${revealed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {dots.map((d, i) => (
        <button
          key={d.id}
          onClick={() =>
            document.getElementById(d.id)?.scrollIntoView({ behavior: 'smooth' })
          }
          className="group relative flex items-center justify-center w-10 h-10 -mr-5"
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              i === active ? 'w-3 h-3 bg-white' : 'w-2 h-2 bg-white/40'
            }`}
          />
          <span className="absolute right-full mr-2 text-white/80 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            {d.label}
          </span>
        </button>
      ))}
    </div>
  );
}
