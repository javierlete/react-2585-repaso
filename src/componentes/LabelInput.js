export default function LabelInput({ etiqueta, id, tipo, soloLectura, requerido, valor, onValorChange }) {
    return (
        <div className="row mb-3">
            <label htmlFor={id} className="col-sm-2 col-form-label">{etiqueta}</label>
            <div className="col-sm">
                <input onChange={onValorChange} type={tipo} readOnly={soloLectura} required={requerido} className="form-control" id={id} value={valor} />
            </div>
        </div>
    )
}