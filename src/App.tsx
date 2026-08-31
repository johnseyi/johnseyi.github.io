import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import CaseStudies from "./components/CaseStudies";
import Principles from "./components/Principles";
import AlsoShipped from "./components/AlsoShipped";
import Stack from "./components/Stack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <CaseStudies />
        <Principles />
        <AlsoShipped />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
