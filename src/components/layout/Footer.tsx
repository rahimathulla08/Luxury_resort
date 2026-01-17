import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { siteData } from "@/config/siteData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-luxury py-12 sm:py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              {siteData.name}
            </h3>
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-primary-foreground/70 mb-4 sm:mb-6">
              {siteData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Rooms & Suites", path: "/rooms" },
                { name: "Amenities", path: "/amenities" },
                { name: "Gallery", path: "/gallery" },
                { name: "Reviews", path: "/reviews" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs sm:text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href={`tel:${siteData.phone}`}
                className="flex items-start gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">
                  {siteData.phoneDisplay}
                </span>
              </a>

              <a
                href={`mailto:${siteData.email}`}
                className="flex items-start gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">
                  {siteData.email}
                </span>
              </a>

              <div className="flex items-start gap-2 sm:gap-3 text-primary-foreground/80">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm leading-relaxed">
                  {siteData.address.full}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 text-primary-foreground/70">
              Follow Us
            </h5>
            <div className="flex gap-3 sm:gap-4">
              {siteData.social.facebook && (
                <a
                  href={siteData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group"
                >
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-accent-foreground" />
                </a>
              )}
              {siteData.social.instagram && (
                <a
                  href={siteData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-accent-foreground" />
                </a>
              )}
              {siteData.social.twitter && (
                <a
                  href={siteData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group"
                >
                  <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-accent-foreground" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-[11px] sm:text-sm text-primary-foreground/60 text-center md:text-left">
              © {currentYear} {siteData.name}. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-[11px] sm:text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
