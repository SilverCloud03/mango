import { useState } from 'react';
import { Pointer, ChevronDown } from 'lucide-react';
import { LiquidGlass } from 'simple-liquid-glass';

export default function Scene1_Start({ revealed, onReveal }) {
  const [shake, setShake] = useState(false);
  const [fall, setFall] = useState(false);
  const [removeMango, setRemoveMango] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    if (!clicked) {
      setClicked(true);
      setHideButton(true);
      setShake(true);
      setTimeout(() => setHideButton(false), 250);
      setTimeout(() => setShake(false), 600);
    } else {
      setHideButton(true);
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setFall(true);
        setTimeout(() => {
          setRemoveMango(true);
          onReveal();
        }, 700);
      }, 600);
    }
  }

  return (
    <section className="scene bg-black">
      <img
        src="b1-bg.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
      />
      <div className="absolute inset-0 bg-black/20" />

      {!removeMango && (
        <div className={`absolute inset-0 z-10 ${fall ? 'fall' : 'mango-offset'}`}>
          <div className={`w-full h-full ${shake ? 'shake' : ''}`}>
            <img
              src="b1-mango.png"
              alt="Манго"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className={`z-20 transition-opacity duration-300 ease-in-out ${hideButton ? 'opacity-0 pointer-events-none' : ''}`} onClick={handleClick} style={{ width: 'min(250px, 60vw)', height: 'min(250px, 60vw)' }}>
        <LiquidGlass
          radius={125}
          border={0.15}
          frost={0.18}
          alpha={0.75}
          lightness={58}
          blur={10}
          saturation={130}
          glassColor="rgba(255, 190, 120, 0.25)"
          borderColor="rgba(255, 255, 255, 0.35)"
          style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08) inset' }}
        >
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-3 text-white w-full h-full">
            <span className="font-serif text-xl sm:text-3xl tracking-wide">Нажмите</span>
            <Pointer size={20} strokeWidth={1.5} />
            <ChevronDown size={16} strokeWidth={1.5} />
          </div>
        </LiquidGlass>
      </div>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none select-none transition-opacity duration-700 ${revealed ? 'opacity-100' : 'opacity-0'}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#808000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: 'clamp(32px, 6vw, 64px)', height: 'clamp(32px, 6vw, 64px)' }}
          className="mb-4"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
        <p
          style={{
            fontSize: 'clamp(1rem, 5vw, 3rem)',
            fontWeight: 300,
            color: '#fff',
            letterSpacing: '0.15em',
            lineHeight: 1.2,
          }}
          className="font-sans"
        >
          ОВОЩИ-ФРУКТЫ
        </p>
        <h1
          style={{
            fontSize: 'clamp(3rem, 15vw, 10rem)',
            fontWeight: 200,
            color: '#f1a842',
            letterSpacing: '0.05em',
            lineHeight: 0.7,
            whiteSpace: 'nowrap',
          }}
          className="font-serif mt-2"
        >
          МАНГО
        </h1>
      </div>
    </section>
  );
}
