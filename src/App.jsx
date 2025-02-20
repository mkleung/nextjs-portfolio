import "./app.scss"
import Hero from "./components/hero/Hero";
import {Navbar} from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";


const App = () => {
  return <div>
 
      <Navbar/>
      {/* <Hero /> */}

    <section><Hero type="services"/></section>
    <section>test</section>
    

  </div>;
};

export default App;
