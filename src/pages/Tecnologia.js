
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainTecnologia from "../components/MainTecnologia";

import { Helmet } from "react-helmet-async";

const Tecnologia = () => {
    return (
        <div>
            <Helmet>
                <title>Tecnologia e sostenibilità - Carrozzeria Bulletti</title>
            </Helmet>
            <Navbar />
            <MainTecnologia />
            <Footer />
        </div>
    );
  };
  
  export default Tecnologia;