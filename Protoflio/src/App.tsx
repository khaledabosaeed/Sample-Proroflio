import Footer from "./components/footer/Footer";
import Form from "./components/From/Form";
import Navbar from "./components/hero-section/componentsNavbar/Navbar";
import { Hero } from "./components/hero-section/hero/hero";
import Sidebar from "./components/hero-section/sidbar/Sidebar";
import Project from "./components/Projects/Project";
import Secondland from "./components/Secondland/Secondland";
import Land from "./components/SecondSection/land";
import Service from "./components/Service/Service";


export default function App() {
  return (
    <>
      <Sidebar />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Land />
      </section>
      <section id="Service">
        <Service />
      </section>
      <section >
        <Secondland />
      </section>
      {/*
      <section id="Pojects">
        <Project />
      </section>
      <section></section>
      <section></section>
      <section id="contact" style={{ marginTop: "6rem", position: 'relative', zIndex: 1 }}>
        <Form />
      </section>
      <section>
        <Footer />

      
      </section> */}
      </>
  );
}