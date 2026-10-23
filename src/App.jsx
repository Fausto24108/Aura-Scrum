import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Inicio from "./paginas/Inicio/Inicio";
import Fundamentos from "./paginas/Fundamentos/Fundamentos";
import Tecnicas from "./paginas/Tecnicas/Tecnicas";
import Scrum from "./paginas/Scrum/Scrum";
import Kanban from "./paginas/Kanban/Kanban";
import Glosario from "./paginas/Glosario/Glosario";
import FAQ from "./paginas/FAQ/FAQ";
import Enlaces from "./paginas/Enlaces/Enlaces";
import Ejercicios from "./paginas/Ejercicios/Ejercicios";
import SobreNosotros from "./paginas/SobreNosotros/SobreNosotros";
import Contacto from "./paginas/Contacto/Contacto";
import Comparador from "./paginas/Comparador/Comparador";
import Encuesta from "./paginas/Encuesta/Encuesta";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/fundamentos" element={<Fundamentos />} />
        <Route path="/tecnicas" element={<Tecnicas />} />
        <Route path="/scrum" element={<Scrum />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/glosario" element={<Glosario />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/enlaces" element={<Enlaces />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/comparador" element={<Comparador />} />
        <Route path="/encuesta" element={<Encuesta />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;