
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainAltriServizi from "../components/MainAltriServizi";

import { Helmet } from "react-helmet-async";
import PopUp from "../components/PopUpCTA";

const AltriServizi = () => {
    return (
        <div>
            <Helmet>
                <title>Altri servizi - Carrozzeria Bulletti</title>
            </Helmet>
            <Navbar />
            <MainAltriServizi />
            <PopUp />
            <Footer />
        </div>
    );
  };
  
  export default AltriServizi;