export default function Formulario() {
    return (
        <form>
            <div className="row mb-3">
                <label for="id" className="col-sm-2 col-form-label">Id</label>
                <div className="col-sm">
                    <input type="number" readOnly className="form-control" id="nombre" />
                </div>
            </div>
            <div className="row mb-3">
                <label for="nombre" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm">
                    <input type="text" className="form-control" id="nombre" />
                </div>
            </div>
            <div className="row mb-3">
                <label for="apellidos" className="col-sm-2 col-form-label">Apellidos</label>
                <div className="col-sm">
                    <input type="text" required className="form-control" id="apellidos" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="offset-sm-2 col-sm">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    );
}