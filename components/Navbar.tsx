
import React, { useState } from 'react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Section }[] = [
    { label: 'Главная', value: 'home' },
    { label: 'Карьера', value: 'career' },
    { label: 'Книги', value: 'books' },
    { label: 'Презентации', value: 'presentations' },
    { label: 'Видео', value: 'videos' },
    { label: 'Ассистент', value: 'assistant' },
    { label: 'Админ', value: 'admin' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-stone-200 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="text-xl md:text-2xl font-serif font-bold tracking-tight text-stone-800"
        >
          Феруза Бозарова
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-stone-900 ${
                activeSection === item.value ? 'text-stone-950 border-b border-stone-800' : 'text-stone-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-stone-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-paper border-b border-stone-200 py-6 flex flex-col items-center space-y-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsOpen(false);
              }}
              className={`text-sm font-bold uppercase tracking-widest ${
                activeSection === item.value ? 'text-stone-950' : 'text-stone-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
