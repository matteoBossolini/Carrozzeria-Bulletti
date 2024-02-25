
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainOfficina from "../components/MainOfficina";

import { Helmet } from "react-helmet-async";

const Carrozzeria = () => {
    return (
        <div>
            <Helmet>
                <title>Servizi di officina meccanica - Carrozzeria Bulletti</title>
            </Helmet>
            <Navbar />
            <MainOfficina />
            <Footer />
        </div>
    );
  };
  
  export default Carrozzeria;