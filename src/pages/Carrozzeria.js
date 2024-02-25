
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainCarrozzeria from "../components/MainCarrozzeria";

import { Helmet } from "react-helmet-async";

const Carrozzeria = () => {
    return (
        <div>
            <Helmet>
                <title>Servizi di carrozzeria - Carrozzeria Bulletti</title>
            </Helmet>
            <Navbar />
            <MainCarrozzeria />
            <Footer />
        </div>
    );
  };
  
  export default Carrozzeria;