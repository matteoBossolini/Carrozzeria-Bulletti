
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Carrozzeria from "./pages/Carrozzeria";
import Officina from "./pages/Officina";
import Contatti from "./pages/Contatti";
import AltriServizi from "./pages/AltriServizi"

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="carrozzeria" element={<Carrozzeria />} />
          <Route path="Officina" element={<Officina />} />
          <Route path="altri_servizi" element={<AltriServizi />} />
          <Route path="Contatti" element={<Contatti />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
