import { useState, useRef } from 'react';

const videos = ['1.mp4', '2.mp4'];

export default function Scene3_Transport() {
  const [idx, setIdx] = useState(0);
  const ref = useRef(null);

  function handleEnded() {
    const next = idx + 1;
    if (next < videos.length) {
      setIdx(next);
      ref.current?.load();
      ref.current?.play();
    }
  }

  return (
    <section className="scene bg-black">
      <video
        ref={ref}
        src={videos[idx]}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={handleEnded}
      />
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
