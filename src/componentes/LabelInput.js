export default function LabelInput({ etiqueta, id, tipo, soloLectura, requerido }) {
    return (
        <div className="row mb-3">
            <label for={id} className="col-sm-2 col-form-label">{etiqueta}</label>
            <div className="col-sm">
                <input type={tipo} readOnly={soloLectura} required={requerido} className="form-control" id={id} />
            </div>
        </div>
    )
}