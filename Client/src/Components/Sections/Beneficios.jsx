import "../../Styles/Beneficios.css"
import { CajasBeneficios } from "../Cajas/CajasBeneficios"

export function Beneficios(){
    return(
        <div id="Beneficios" className="Contenedor_Beneficios_Landing">
            <div className="Titulo_Beneficios">
                <h1>BENEFICIOS QUE OFRECE <span>EASY BANK</span></h1>
            </div>
            <div className="ContenedorCajas">
                <CajasBeneficios/>
                <CajasBeneficios/>
                <CajasBeneficios/>
            </div>
        </div>
    )
}