import { useState } from 'react';
import { LiquidGlass } from 'simple-liquid-glass';

export default function Scene2_Scroll() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setOffset({ x, y });
  }

  return (
    <section className="scene bg-black" onMouseMove={handleMouseMove}>
      <img
        src="b2-bg.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <img
        src="b2-hand.png"
        alt="Рука с манго"
        className="absolute inset-y-0 left-0 w-full h-full object-cover z-10 transition-transform duration-300 ease-out"
        style={{
          objectPosition: '65% center',
          transform: `translate(${offset.x * -2}px, ${offset.y * -2}px)`,
        }}
      />
      <div
        className="absolute bottom-8 left-4 right-4 md:bottom-12 md:left-12 md:right-auto z-20"
        style={{ maxWidth: 340 }}
      >
        <LiquidGlass
          radius={16}
          border={0.12}
          frost={0.18}
          alpha={0.75}
          lightness={58}
          blur={12}
          saturation={130}
          background="rgba(255, 255, 255, 0.1)"
          borderColor="rgba(255, 255, 255, 0.15)"
          style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset' }}
        >
          <div style={{ padding: '24px 28px' }}>
            <p
              className="text-white"
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontSize: 'clamp(18px, 4vw, 24px)',
                lineHeight: 1.4,
              }}
            >
              Собираем лучшие фрукты и овощи для вас
            </p>
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
}
