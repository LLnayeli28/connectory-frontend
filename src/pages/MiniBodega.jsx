import { useEffect, useState } from "react";
import api from "../api/api";

const MiniBodega = ({ vehiculo }) => {
  const [miniBodega, setMiniBodega] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/vehiculos/${vehiculo.id}/mini-bodega`)
      .then(res => setMiniBodega(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [vehiculo.id]);

  if (loading) return <p>Cargando mini bodega...</p>;

  if (!miniBodega) {
    return <p>Este vehículo no tiene mini bodega</p>;
  }

  return (
    <div>
      <h2>Mini Bodega — {vehiculo.placa}</h2>

      {miniBodega.consumibles.length === 0 && (
        <p>No hay materiales en esta mini bodega</p>
      )}

      <ul>
        {miniBodega.consumibles.map(c => (
          <li key={c.id}>
             {c.nombre} — {c.cantidad}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiniBodega;
