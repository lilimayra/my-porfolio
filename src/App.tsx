import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 lg:px-8">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
};

export default App;
