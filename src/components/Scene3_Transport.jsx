import { useState, useRef, useEffect } from 'react';
import useScrollParallax from '../hooks/useScrollParallax';

const videos = ['1.mp4', '2.mp4'];

export default function Scene3_Transport() {
  const [idx, setIdx] = useState(0);
  const refs = [useRef(null), useRef(null)];
  const scrollY = useScrollParallax();

  function handleEnded() {
    const next = (idx + 1) % videos.length;
    const nextRef = refs[next].current;
    if (nextRef) {
      nextRef.currentTime = 0;
      nextRef.play().catch(() => {});
    }
    setIdx(next);
  }

  useEffect(() => {
    const current = refs[idx].current;
    if (current && current.paused) {
      current.play().catch(() => {});
    }
  }, [idx]);

  return (
    <section className="scene bg-black">
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${(scrollY - window.innerHeight * 2) * 0.15}px)` }}
      >
        {videos.map((src, i) => (
          <video
            key={i}
            ref={refs[i]}
            src={src}
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
            style={{ pointerEvents: 'none' }}
            onEnded={i === idx ? handleEnded : undefined}
            preload="auto"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/30" />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{
          fontFamily: "'Playfair Display', 'Times New Roman', serif",
        }}
      >
        <p className="text-white" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', lineHeight: 1.2 }}>
          Везем вам овощи и фрукты
        </p>
        <p className="text-white/90" style={{ fontSize: 'clamp(1.4rem, 4.5vw, 3.5rem)', lineHeight: 1.2 }}>
          со всего мира
        </p>
      </div>
    </section>
  );
}
