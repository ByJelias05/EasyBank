import "../../Styles/Testimonio.css"
import { CajaTestimonio } from "../Cajas/CajasTestimonios"
import { FooterLanding } from "../Footers/FooterLanding"

export function Testimonios(){
    return(
        <div id="Testimonios" className="Contenedor_Testimonios_Landing">
            <div className="Titulo_Testimonios">
                <h2 className="titulo_T1">TESTIMONIOS HECHOS</h2>
                <h1 className="titulo_T2">POR USUARIOS QUE USAN</h1>
                <h2 className="titulo_T3"><span>EASY</span> BANK</h2>
            </div>
            <div className="Contenedor_Testimonios">
                <CajaTestimonio/>
                <CajaTestimonio/>
                <CajaTestimonio/>
            </div>
        </div>
    )
}