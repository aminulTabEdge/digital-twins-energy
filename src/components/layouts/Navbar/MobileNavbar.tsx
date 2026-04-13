"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import { Menu, X, PhoneCall } from "lucide-react";
import Logo from "./Logo";
import { mainNavLinks } from "@/constant/navMenu";
import NavbarItem from "./NavbarItem";
import { Button } from "@/components/ui/button";

const MobileNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "auto";
  }, [mobileSidebarOpen]);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-white/10 py-3 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="text-white hover:bg-white/10"
          >
            {mobileSidebarOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </Button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" 
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-white dark:bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5">
          <Logo />
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-6">
          <ul className="flex flex-col gap-4">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <NavbarItem 
                  {...link} 
                  isMobile 
                  onClick={() => setMobileSidebarOpen(false)} 
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-slate-800/50">
          <Link href="/contact" onClick={() => setMobileSidebarOpen(false)}>
            <Button variant="destructive" className="w-full rounded-xl py-6 font-bold flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" />
              CONTACT US
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MobileNavbar;

