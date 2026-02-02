const API_URL = 'http://localhost:3000/api/vehiculos';

export const obtenerVehiculos = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const crearVehiculo = async (vehiculo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehiculo)
  });
  return await response.json();
};

export const actualizarVehiculo = async (id, vehiculo) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(vehiculo)
  });
  return await response.json();
};

export const eliminarVehiculo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return await response.json();
};
