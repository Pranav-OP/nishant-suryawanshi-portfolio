import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header style={{ padding: "1rem", textAlign: "right" }}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}
