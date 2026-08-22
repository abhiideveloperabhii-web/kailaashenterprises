import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Container from '../common/Container';
import Logo from '../common/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Work Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Micro Top Bar with Location & Phone */}
      <div className="bg-[#170A2C] text-white py-1 px-4 text-xs border-b border-[#32105F]/40 hidden md:block">
        <Container size="large" className="flex items-center justify-between">
          <div className="flex items-center gap-5 text-[#C4B5D4] text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-white/90">
              <Icon name="MapPin" className="w-3 h-3 text-[#D7A72E]" />
              Khardi, Pune — 411014
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="Clock" className="w-3 h-3 text-[#D7A72E]" />
              Mon - Sat: 9:00 AM - 8:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#D7A72E] font-semibold tracking-wider hidden lg:inline">
              {COMPANY.tagline}
            </span>
            <a 
              href={`tel:${COMPANY.phoneRaw}`} 
              className="inline-flex items-center gap-1 text-white font-bold hover:text-[#D7A72E] transition-colors"
            >
              <Icon name="Phone" className="w-3 h-3 text-[#D7A72E]" />
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-200 ${
        isScrolled 
          ? 'glass-nav py-2.5 shadow-md shadow-[#32105F]/5' 
          : 'bg-[#FAF8F3] py-3 border-b border-[#E8E2EE]'
      }`}>
        <Container size="large" className="flex items-center justify-between">
          {/* Brand Logo Lockup */}
          <Logo theme="light" size="md" />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-[#32105F] bg-[#32105F]/10 font-bold'
                    : 'text-[#16131B] hover:text-[#32105F] hover:bg-[#32105F]/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right CTA Section */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#32105F] hover:text-[#170A2C] px-3 py-2 rounded-xl hover:bg-[#32105F]/5 transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-[#32105F]/10 flex items-center justify-center text-[#32105F]">
                <Icon name="Phone" className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline">{COMPANY.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <Button
              href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to enquire about your services in Pune.")}
              variant="whatsapp"
              size="sm"
              icon="MessageSquare"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="w-9 h-9 rounded-xl bg-white border border-[#E8E2EE] flex items-center justify-center text-[#32105F]"
              aria-label="Call directly"
            >
              <Icon name="Phone" className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-xl bg-white border border-[#E8E2EE] flex items-center justify-center text-[#32105F] hover:bg-[#FAF8F3] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Slide-over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[52px] z-30 bg-black/40 backdrop-blur-xs lg:hidden animate-fade-in">
          <div className="bg-white w-full max-h-[85vh] overflow-y-auto border-b border-[#E8E2EE] shadow-xl p-5 space-y-4">
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#68636F] px-2 mb-1">
                Navigation
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-2.5 rounded-xl text-sm font-bold ${
                    isActive(link.path)
                      ? 'bg-[#32105F] text-white'
                      : 'text-[#16131B] hover:bg-[#FAF8F3]'
                  }`}
                >
                  <span>{link.name}</span>
                  <Icon name="ChevronRight" className="w-4 h-4 opacity-60" />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8E2EE] space-y-2">
              <Button
                href={getWhatsAppUrl("Hello Kailaash Enterprises, I would like to consult about your services.")}
                variant="whatsapp"
                fullWidth
                size="md"
                icon="MessageSquare"
              >
                Chat on WhatsApp
              </Button>

              <Button
                href={`tel:${COMPANY.phoneRaw}`}
                variant="secondary"
                fullWidth
                size="md"
                icon="PhoneCall"
              >
                Call: {COMPANY.phoneDisplay}
              </Button>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF8F3] border border-[#E8E2EE] text-[11px] text-[#68636F]">
              <span className="font-bold text-[#16131B] block mb-0.5">Pune Office:</span>
              {COMPANY.location.fullAddress}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
