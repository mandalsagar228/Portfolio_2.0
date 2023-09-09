import "./App.css";

import Aos from "aos";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/UI/Hero";
import Service from "./Components/UI/Services";
import Portfolio from "./Components/UI/Portfolio";
import { useEffect } from "react";
import Contact from "./Components/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Service />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
