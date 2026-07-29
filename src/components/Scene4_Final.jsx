import { Send } from 'lucide-react';

export default function Scene4_Final() {
  return (
    <section className="scene bg-black overflow-hidden">
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
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

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
