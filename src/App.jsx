import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Inicio from "./paginas/Inicio/Inicio";
import Fundamentos from "./paginas/Fundamentos/Fundamentos";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/fundamentos" element={<Fundamentos />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;