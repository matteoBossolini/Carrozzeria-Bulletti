
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CaroselloServizi from "../components/CaroselloServizi";
import Footer from "../components/Footer";
import AltreInfo from "../components/AltreInfo";

import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Carrozzer Bulletti</title>
            </Helmet>
            <Navbar />
            <Hero />
            <CaroselloServizi />
            <AltreInfo />
            <Footer />
        </div>
    );
  };
  
  export default Home;