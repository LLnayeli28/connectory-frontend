import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api";

function Tecnicos() {
  const [tecnicos, setTecnicos] = useState([]);
  const [nombres, setNombres] = useState("");
  const [cedula, setCedula] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  const cargarTecnicos = async () => {
    const res = await fetch(`${API_URL}/tecnicos`);
    const data = await res.json();
    setTecnicos(data);
  };

  useEffect(() => {
    cargarTecnicos();
  }, []);

  const crearTecnico = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/tecnicos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombres,
        cedula,
        especialidad,
      }),
    });

    setNombres("");
    setCedula("");
    setEspecialidad("");
    cargarTecnicos();
  };

  return (
    <div>
      <h1>Técnicos</h1>

      <form onSubmit={crearTecnico}>
        <input
          placeholder="Nombres"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
          required
        />

        <input
          placeholder="Cédula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          required
        />

        <input
          placeholder="Especialidad"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          required
        />

        <button>Agregar</button>
      </form>

      <ul>
        {tecnicos.map((t) => (
          <li key={t.id}>
            {t.nombres} — {t.especialidad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tecnicos;
