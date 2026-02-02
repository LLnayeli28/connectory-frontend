import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api";

function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anio, setAnio] = useState("");

  // Obtener vehículos
  const cargarVehiculos = async () => {
    const res = await fetch(`${API_URL}/vehiculos`);
    const data = await res.json();
    setVehiculos(data);
  };

  useEffect(() => {
    cargarVehiculos();
  }, []);

  // Crear vehículo
  const crearVehiculo = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/vehiculos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        placa,
        marca,
        modelo, 
        anio,
      }),
    });

    setPlaca("");
    setMarca("");
    setModelo("");
    setAnio("");
    cargarVehiculos();
  };

  return (
    <div>
      <h1>Vehículos</h1>

      <form onSubmit={crearVehiculo}>
        <input
          type="text"
          placeholder="Placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
        />
        <input
            type="number"
            placeholder="Año"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
            required
          />

        <button type="submit">Agregar</button>
      </form>

      <hr />

      <ul>
        {vehiculos.map((v) => (
          <li key={v.id}>
            {v.placa} — {v.marca} — {v.modelo} — {v.anio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vehiculos;
