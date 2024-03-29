
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainContatti from "../components/MainContatti";
import PopUp from "../components/PopUpCTA";

import { Helmet } from "react-helmet-async";

const Contatti = () => {
    return (
        <div>
            <Helmet>
                <title>Contatti - Carrozzeria Bulletti</title>
            </Helmet>
            <Navbar />
            <MainContatti />
            <PopUp />
            <Footer />
        </div>
    );
  };
  
  export default Contatti;