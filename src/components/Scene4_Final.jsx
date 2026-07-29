import { useState } from 'react';
import { Send } from 'lucide-react';
import { LiquidGlass } from 'simple-liquid-glass';

export default function Scene4_Final() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setOffset({ x, y });
  }

  return (
    <section className="scene bg-black overflow-hidden" onMouseMove={handleMouseMove}>
      <img
        src="b4-bg.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'blur(6px)', transform: 'scale(1.15)' }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <img
        src="b4-guy.png"
        alt="Владелец"
        className="absolute inset-0 w-full h-full object-contain sm:object-cover z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${offset.x * -2}px, ${offset.y * -2}px)`,
        }}
      />

      <div
        className="absolute top-4 left-4 right-4 md:top-12 md:right-12 md:left-auto z-20"
        style={{ maxWidth: 300 }}
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
          <div style={{ padding: '20px 24px' }}>
            <p
              className="text-white"
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                fontSize: 'clamp(18px, 4vw, 22px)',
                lineHeight: 1.4,
              }}
            >
              С любовью
              <br />
              от семьи МАНГО
            </p>
          </div>
        </LiquidGlass>
      </div>

      <footer
        className="absolute bottom-0 left-0 w-full z-20 flex items-center px-4"
        style={{
          minHeight: 90,
          background: '#000',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-1 md:gap-4 text-white text-xs md:text-sm py-3 md:py-0">
          <div className="text-white/70 text-center md:text-left">
            Адрес: с. Ивановка
          </div>
          <div className="text-white/70 text-center md:text-center">
            +7 996 460 8002
          </div>
          <div className="flex gap-2 justify-center md:justify-end items-center text-white/60">
            <Send size={16} strokeWidth={1.5} />
            <span className="text-xs">@AsianBazaar2024</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
