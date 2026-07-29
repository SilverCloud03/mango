import { useState } from 'react';
import { Leaf, Menu } from 'lucide-react';
import BurgerMenu from './BurgerMenu';

export default function Navbar({ revealed }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 md:p-6 z-30 transition-opacity duration-700 ${revealed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 text-white p-2 -ml-2">
          <Leaf size={22} />
          <span className="font-serif text-lg tracking-wide">МАНГО</span>
        </button>
        <button onClick={() => setMenuOpen(true)} className="text-white cursor-pointer p-2 -mr-2">
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </nav>
      <BurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
