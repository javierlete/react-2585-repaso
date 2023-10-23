import Linea from "./Linea";

export default function Listado() {
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
                    <Linea id="1" nombre="Javier" apellidos="Lete" />
                    <Linea id="2" nombre="Pepe" apellidos="Pérez" />
                </tbody>
                <tfoot className="table-dark">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <a href="#" className="btn btn-sm btn-primary">Agregar</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}