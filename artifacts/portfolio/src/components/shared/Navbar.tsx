import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["about", "work", "projects", "skills", "achievements", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(17,18,22,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(42,44,56,0.9)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <a
          href="#"
          data-testid="nav-logo"
          className="font-display text-xl font-bold tracking-tighter"
          style={{ color: "#C5ADC5" }}
        >
          SS
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive
                    ? "#C5ADC5"
                    : "rgba(255,255,255,0.38)",
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}