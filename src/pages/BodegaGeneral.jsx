import { useEffect, useState } from "react";
import "../styles/bodega.css";
import ConsumibleForm from "../components/ConsumibleForm";
import ConsumibleTable from "../components/ConsumibleTable";
import { getConsumibles } from "../services/consumibles.api";
export default function BodegaGeneral() {
  const [consumibles, setConsumibles] = useState([]);

  const cargarConsumibles = async () => {
    const data = await getConsumibles();
    setConsumibles(data);
  };

  useEffect(() => {
    cargarConsumibles();
  }, []);

  return (
    <div className="pbodega-container">
      <h2>Bodega General</h2>

      <ConsumibleForm onCreated={cargarConsumibles} />
      <ConsumibleTable consumibles={consumibles} />
    </div>
  );
}
