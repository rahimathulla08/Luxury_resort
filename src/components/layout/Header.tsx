import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { siteData } from "@/config/siteData";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Amenities", path: "/amenities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          backdrop-blur-xl border-b border-black/10
          ${isScrolled ? "bg-background/95 shadow-luxury" : "bg-white/70"}
        `}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="font-serif font-semibold text-lg sm:text-xl md:text-2xl text-charcoal">
                {siteData.name}
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-charcoal/70">
                {siteData.tagline}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      relative text-sm uppercase tracking-wide transition-all
                      ${active
                        ? "text-accent font-semibold"
                        : "text-charcoal hover:text-accent"}
                    `}
                  >
                    {link.name}
                    <span
                      className={`
                        absolute -bottom-1 left-0 h-[2px] bg-accent transition-all
                        ${active ? "w-full" : "w-0"}
                      `}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteData.phone}`}
                className="text-charcoal hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-gold-light px-6 py-2 text-sm"
              >
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE BLUR BACKDROP */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`
          fixed inset-0 z-40 backdrop-blur-xl bg-black/50 transition-opacity
          ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* MOBILE MENU */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-[85%] max-w-xs
          bg-background/95 backdrop-blur-xl
          transition-transform duration-500
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <span className="font-serif text-base sm:text-lg text-charcoal">
            {siteData.name}
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-3 py-2.5 rounded-md transition-all
                  text-sm font-medium
                  ${active
                    ? "bg-accent/15 text-accent border-l-4 border-accent"
                    : "text-charcoal hover:bg-muted"}
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
            <a
              href={`tel:${siteData.phone}`}
              className="flex items-center gap-2 text-xs sm:text-sm text-charcoal"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteData.phoneDisplay}
            </a>

            <Button
              asChild
              className="bg-accent text-accent-foreground w-full py-2 text-xs sm:text-sm"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
};
