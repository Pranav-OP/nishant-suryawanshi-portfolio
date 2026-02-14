export default function Navbar() {
  const sections = [
    "Home",
    "Experience",
    "Education",
    "Skills",
    "Certifications",
    "Languages"
  ];

  return (
    <nav className="navbar">
      {sections.map(section => (
        <a key={section} href={`#${section.toLowerCase()}`}>
          {section}
        </a>
      ))}
    </nav>
  );
}
