import axios from "axios";
import { Link } from "react-router-dom";

export default function Linea({ id, nombre, apellidos, onBorrado }) {
    async function eliminar(id) {
        const respuesta = await axios.delete("http://localhost:3000/usuarios/" + id);
        console.log(respuesta);

        if(respuesta.status >= 200 && respuesta.status < 300) {
            onBorrado(id);
        }
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{apellidos}</td>
            <td>
                <Link to={'/formulario/' + id} className="btn btn-sm btn-primary">Editar</Link>
                <a onClick={() => eliminar(id)} className="btn btn-sm btn-danger">Eliminar</a>
            </td>
        </tr>
    );
}