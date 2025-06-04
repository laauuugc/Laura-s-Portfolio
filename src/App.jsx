import { useState } from 'react';
import styles from './App.module.css';
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Starter } from "./components/Starter/Starter";

function App() {
  const [showStarter, setShowStarter] = useState(true);

  return (
    <div className={styles.App}>
      {showStarter && <Starter onComplete={() => setShowStarter(false)} />}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App
