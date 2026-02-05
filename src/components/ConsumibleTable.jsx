export default function ConsumibleTable({ consumibles }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {consumibles.map((c) => (
          <tr key={c.id}>
            <td>{c.nombre}</td>
            <td>{c.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
