import { Formularo } from "./Formulario";
import { Opciones } from "./Opciones";
import { Servicios } from "./Servicios";

export function GeneralApp({source}){
    return(
        <div className="Contenedor_General_App">
            <div className="Servicio_Formulario">
                <Servicios source={source}/>
                <Formularo/>
            </div>
            <Opciones/>
        </div>
    )
}