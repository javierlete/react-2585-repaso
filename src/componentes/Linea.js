export default function Linea({ id, nombre, apellidos }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{apellidos}</td>
            <td>
                <a href="#" className="btn btn-sm btn-primary">Editar</a>
                <a href="#" className="btn btn-sm btn-danger">Eliminar</a>
            </td>
        </tr>
    );
}