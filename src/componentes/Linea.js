import { Link } from "react-router-dom";

export default function Linea({ id, nombre, apellidos }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{apellidos}</td>
            <td>
                <Link to="/formulario" className="btn btn-sm btn-primary">Editar</Link>
                <a href="#" className="btn btn-sm btn-danger">Eliminar</a>
            </td>
        </tr>
    );
}