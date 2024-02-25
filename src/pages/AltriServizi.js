
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainAltriServizi from "../components/MainAltriServizi";

import { Helmet } from "react-helmet-async";

const AltriServizi = () => {
    return (
        <div>
            <Helmet>
                <title>Altri servizi - Carrozzeria Bulletti</title>
            </Helmet>
            <Navbar />
            <MainAltriServizi />
            <Footer />
        </div>
    );
  };
  
  export default AltriServizi;