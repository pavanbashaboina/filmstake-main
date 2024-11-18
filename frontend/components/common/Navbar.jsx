"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
import { ClipperLogoSvg, menuItems, UserSvg } from '@/lib/utils/helper';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const cinzelFont = Cinzel({ subsets: ['latin'] });

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 right-0 z-50 flex w-full items-center justify-between px-10 max-md:px-5 h-[12vh]  backdrop-blur-md">
        <Link href="/">
          <div className={`${cinzelFont.className} flex items-center`}>
            <h3 className="text-2xl max-md:text-xl text-foreground">FILM</h3>
            <div className="h-[60px] w-[60px] max-md:h-[45px] max-md:w-[45px]">
              <ClipperLogoSvg />
            </div>
            <h3 className="text-2xl max-md:text-xl text-foreground">STAKE</h3>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/signin">
            <button className="cursor-pointer rounded-full border border-border bg-secondary/40 backdrop-blur-md px-5 py-2 max-md:px-2 transition-all duration-300 ease-in-out hover:bg-secondary/60 hover:border-border/50 hover:scale-105 hover:shadow-lg hover:shadow-background/20">
              <div className="flex items-center gap-4">
                <p className="max-md:hidden text-foreground">Signin</p>
                <UserSvg />
              </div>
            </button>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer rounded-full border border-border bg-secondary/40 backdrop-blur-md px-2 py-2 transition-all duration-300 ease-in-out hover:bg-secondary/60 hover:border-border/50 hover:scale-105 hover:shadow-lg hover:shadow-background/20 z-50"
          >
            <div className={`w-4 h-3.5 flex flex-col justify-between transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
              <span className={`w-full h-[1px] bg-foreground transform transition-all duration-300 ${isMenuOpen ? 'translate-y-[6px] rotate-90' : ''}`}></span>
              <span className={`w-full h-[1px] bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-[1px] bg-foreground transform transition-all duration-300 ${isMenuOpen ? '-translate-y-[6px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-background/95 backdrop-blur-lg transition-all duration-500 ${
            isMenuOpen ? 'scale-100' : 'scale-0'
          }`}
          style={{ transformOrigin: 'top right' }}
        />

        <div className="relative h-full w-full flex items-center justify-center">
          <div className={`${cinzelFont.className} flex flex-col items-center justify-center space-y-8`}>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`relative group transition-all duration-500 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="overflow-hidden">
                  <span className="text-5xl font-bold text-foreground/80 hover:text-foreground transition-colors duration-300 block">
                    {item.title}
                  </span>
                </div>
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`relative group transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${menuItems.length * 100}ms`
              }}
            >
              <div className="flex items-center gap-4 text-5xl font-bold text-foreground/80 hover:text-foreground transition-colors duration-300">
                <span>{theme=="dark"?"light":"dark"}</span>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Moon
                    className={`w-12 h-12 absolute transition-all duration-300 ${
                      theme === 'dark' ? 'rotate-0 opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                  />
                  <Sun 
                    className={`w-12 h-12 absolute transition-all duration-300 ${
                      theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                  />
                </div>
              </div>
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;