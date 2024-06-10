
import "../../Styles/Cajas.css"

export function CajaLogin(props){
    return(
        <div className="Contenedor_Caja_Login">
            <video className="Video_Login"  autoPlay src={props.video}></video>
               <div className="Contenedor-Info_video">
                    <h3>Inicia sesion en</h3>
                    <h2>EL BANCO ONLINE MAS SEGURO</h2>
                    <h2>Y EFICAZ DE LA REGION.</h2>
               </div>
        </div>
    )
}