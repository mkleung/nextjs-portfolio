import "./app.scss"
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import {Navbar} from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";


const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      {/* <Hero /> */}

      <section><Parallax type="services"/></section>
    </section>
    

  </div>;
};

export default App;
