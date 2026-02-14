import { useEffect, useState } from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Section from "./components/Section";
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
      <Header />
      <Hero data={data} />
      <Experience experience={data.experience} />
      <Section title="Education" items={data.education} />
      <Skills skills={data.skills} />
      <Section title="Certifications" list={data.certifications} />
      <Section title="Languages" list={data.languages} />
      <Footer />
    </>
  );
}

export default App;
