import { Link } from "react-router-dom";
import LabelInput from "./LabelInput";

export default function Formulario() {
    return (
        <form>
            <LabelInput id="id" etiqueta="Id" tipo="number" requerido={false} soloLectura={true} />
            <LabelInput id="nombre" etiqueta="Nombre" tipo="text" requerido={true} soloLectura={false} />
            <LabelInput id="apellidos" etiqueta="Apellidos" tipo="text" requerido={false} soloLectura={false} />
            <div className="row mb-3">
                <div className="offset-sm-2 col-sm">
                    <Link to="/" className="btn btn-primary">Guardar</Link>
                </div>
            </div>
        </form>
    );
}