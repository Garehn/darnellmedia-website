"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_RAW, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className={cn(
                "font-serif text-xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-brand-600" : "text-white"
              )}>
                Darnell<span className="text-amber-500">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-amber-500",
                    isScrolled ? "text-gray-700" : "text-white/90"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-amber-500",
                  isScrolled ? "text-gray-700" : "text-white/90"
                )}
              >
                <Phone className="h-3.5 w-3.5" />
                {PHONE_DISPLAY}
              </a>
              <Button variant="amber" size="sm" asChild>
                <Link href="/book/">Book a free consultation</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-brand-600 flex flex-col"
          >
            <div className="flex items-center justify-between px-4 h-16 border-b border-brand-500/30">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-xl font-bold text-white"
              >
                Darnell<span className="text-amber-400">.</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                  hidden: {},
                }}
                className="space-y-6"
              >
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-serif font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <div className="px-8 pb-12 space-y-4">
              <Button variant="amber" size="xl" className="w-full" asChild>
                <Link href="/book/" onClick={() => setIsMenuOpen(false)}>
                  Book a free consultation
                </Link>
              </Button>
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
