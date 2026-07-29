import { useState } from 'react';
import { LiquidGlass } from 'simple-liquid-glass';
import { Home, Leaf, Truck, Heart, X } from 'lucide-react';

const links = [
  { href: '#start', label: 'Главная', icon: Home },
  { href: '#about', label: 'О нас', icon: Leaf },
  { href: '#transport', label: 'Доставка', icon: Truck },
  { href: '#contacts', label: 'Контакты', icon: Heart },
];

export default function BurgerMenu({ open, onClose }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
          <div
            className="relative mx-4 w-full"
            style={{ maxWidth: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <LiquidGlass
              radius={16}
              border={0.12}
              frost={0.2}
              alpha={0.85}
              lightness={60}
              blur={12}
              saturation={130}
              background="rgba(255, 255, 255, 0.12)"
              borderColor="rgba(255, 255, 255, 0.15)"
              style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08) inset' }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-serif text-lg">МЕНЮ</span>
                  <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-2 -mr-2">
                    <X size={22} strokeWidth={1.5} />
                  </button>
                </div>
                <nav className="space-y-2">
                  {links.map(({ href, label, icon: Icon }) => (
                    <button
                      key={href}
                      onClick={() => {
                        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                        onClose();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium"
                    >
                      <Icon size={20} strokeWidth={1.5} />
                      <span>{label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </LiquidGlass>
          </div>
        </div>
      )}
    </>
  );
}
