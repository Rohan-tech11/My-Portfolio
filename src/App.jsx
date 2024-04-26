import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Faqs from "./sections/faqs/Faqs";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <main>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Faqs></Faqs>
        <Contact></Contact>
        <Footer></Footer>
        <FloatingNav></FloatingNav>
      </main>
    </div>
  );
};

export default App;
