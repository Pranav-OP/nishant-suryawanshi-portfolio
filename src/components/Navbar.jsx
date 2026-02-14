import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const sections = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Certifications", id: "certifications" },
    { label: "Languages", id: "languages" }
  ];

  return (
    <nav className="navbar">
      {/* Centered links */}
      <div className="nav-links">
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
      </div>

      {/* Theme toggle */}
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
}
