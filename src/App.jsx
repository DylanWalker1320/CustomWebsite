import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
