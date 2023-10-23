import { Link, useParams } from "react-router-dom";
import LabelInput from "./LabelInput";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Formulario() {
    const [usuario, setUsuario] = useState({ id: '', nombre: '', apellidos: '' });
    const { id } = useParams();

    async function cargarUsuario() {
        if (id) {
            const respuesta = await axios.get("http://localhost:3000/usuarios/" + id);
            const usuario = await respuesta.data;

            setUsuario(usuario);
        }
    }

    async function guardar() {
        console.log(usuario);

        let respuesta;
        
        if(usuario.id){
            respuesta = await axios.put("http://localhost:3000/usuarios/" + usuario.id, usuario);
        } else {
            respuesta = await axios.post("http://localhost:3000/usuarios/", usuario);
        }

        console.log(respuesta);
    }

    useEffect(() => { cargarUsuario() }, []);

    return (
        <form>
            <LabelInput id="id" etiqueta="Id" tipo="number" requerido={false} soloLectura={true} valor={usuario.id} />
            <LabelInput id="nombre" etiqueta="Nombre" tipo="text" requerido={true} soloLectura={false} valor={usuario.nombre} onValorChange={e => setUsuario({ ...usuario, nombre: e.target.value })} />
            <LabelInput id="apellidos" etiqueta="Apellidos" tipo="text" requerido={false} soloLectura={false} valor={usuario.apellidos} onValorChange={e => setUsuario({ ...usuario, apellidos: e.target.value })} />
            <div className="row mb-3">
                <div className="offset-sm-2 col-sm">
                    <Link onClick={guardar} to="/" className="btn btn-primary">Guardar</Link>
                </div>
            </div>
        </form>
    );
}