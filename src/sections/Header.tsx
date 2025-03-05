"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPos = window.scrollY;

    sections.forEach((section) => {
      const elem = document.getElementById(section);
      if (elem) {
        const rect = elem.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="relative flex gap-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <motion.div
          className="absolute h-full w-1/4 bg-white rounded-full opacity-15"
          style={{
            left: activeSection === 'home' ? '0%' :
                  activeSection === 'about' ? '25%' :
                  activeSection === 'projects' ? '50%' :
                  '75%',
          }}
          transition={{ duration: 0.5 }}
        />
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-item w-[85px] text-center transition-colors duration-300 `}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section);
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};