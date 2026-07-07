import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-neutral-900 dark:bg-[#0d0f11] dark:text-neutral-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
