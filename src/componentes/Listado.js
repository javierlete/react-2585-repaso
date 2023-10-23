import axios from "axios";
import Linea from "./Linea";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Listado() {
    const [usuarios, setUsuarios] = useState([]);
    async function cargarUsuarios() {
        const respuesta = await axios.get("http://localhost:3000/usuarios/");
        const usuariosRecibidos = await respuesta.data;

        setUsuarios(usuariosRecibidos);
    }

    useEffect(() => { cargarUsuarios(); }, []);

    return (
        <div className="table-responsive">
            <table className="table table-sm table-hover table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => <Linea key={usuario.id} {...usuario} />)}
                </tbody>
                <tfoot className="table-dark">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Link to="/formulario" className="btn btn-sm btn-primary">Agregar</Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}