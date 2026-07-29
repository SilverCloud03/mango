import { LiquidGlass } from 'simple-liquid-glass';

export default function Scene2_Scroll() {
  return (
    <section className="scene bg-black">
      <img
        src="b2-bg.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <img
        src="b2-hand.png"
        alt="Рука с манго"
        className="absolute inset-y-0 right-0 w-full h-full object-cover z-10 transition-transform duration-300 ease-out hidden sm:block"
        style={{ objectPosition: '90% center' }}
      />
      <img
        src="b2-hand.png"
        alt="Рука с манго"
        className="absolute inset-y-0 right-0 w-full h-full object-cover z-10 block sm:hidden"
        style={{ objectPosition: '75% center' }}
      />
      <div
        className="absolute bottom-8 left-4 right-4 md:bottom-12 md:left-12 md:right-auto z-20"
        style={{ maxWidth: 340 }}
      >
        <LiquidGlass
          radius={16}
          border={0.12}
          frost={0.05}
          alpha={0.6}
          lightness={55}
          blur={4}
          saturation={120}
          background="rgba(255, 255, 255, 0.08)"
          borderColor="rgba(255, 255, 255, 0.12)"
          style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06) inset' }}
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
