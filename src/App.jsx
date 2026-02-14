import { useEffect, useState } from "react";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return null;

  return (
    <>
      {/* Live Background */}
      <div className="background">
        <span className="orb o1" />
        <span className="orb o2" />
        <span className="orb o3" />
      </div>

      <Navbar />

      <Hero data={data} />
      <Experience experience={data.experience} />
      <Education education={data.education} />
      <Skills skills={data.skills} />
      <Certifications certifications={data.certifications} />
      <Languages languages={data.languages} />

      <Footer />
    </>
  );
}

export default App;
