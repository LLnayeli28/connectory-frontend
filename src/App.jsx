import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Vehiculos from "./pages/Vehiculos";
import Tecnicos from "./pages/Tecnicos";
import Cuadrillas from "./pages/Cuadrillas";
import BodegaGeneral from "./pages/BodegaGeneral";
import MiniBodega from "./pages/MiniBodega";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/vehiculos" element={<Vehiculos />} />
  <Route path="/tecnicos" element={<Tecnicos />} />
  <Route path="/cuadrillas" element={<Cuadrillas />} />

<Route path="/mini-bodega" element={<MiniBodega />} />
<Route path="/bodega-general" element={<BodegaGeneral />} />

</Routes>

    </BrowserRouter>
  );
}

export default App;
