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
                    <tr>
                        <td>1</td>
                        <td>Jose</td>
                        <td>Perez</td>
                        <td>
                            <a href="#" className="btn btn-sm btn-primary">Editar</a>
                            <a href="#" className="btn btn-sm btn-danger">Eliminar</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jose</td>
                        <td>Perez</td>
                        <td>
                            <a href="#" className="btn btn-sm btn-primary">Editar</a>
                            <a href="#" className="btn btn-sm btn-danger">Eliminar</a>
                        </td>
                    </tr>
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