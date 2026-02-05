import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api";

function Cuadrillas() {
  const [cuadrillas, setCuadrillas] = useState([]);
  const [nombre, setNombre] = useState("");

  const cargarCuadrillas = async () => {
    const res = await fetch(`${API_URL}/cuadrillas`);
    setCuadrillas(await res.json());
  };

  useEffect(() => {
    cargarCuadrillas();
  }, []);

  const crearCuadrilla = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/cuadrillas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre })
    });

    setNombre("");
    cargarCuadrillas();
  };

  return (
    <div>
      <h1>Cuadrillas</h1>

      <form onSubmit={crearCuadrilla}>
        <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <button>Agregar</button>
      </form>

      <ul>
        {cuadrillas.map(c => (
          <li key={c.id}>{c.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cuadrillas;
