import image from "../../Images/Testimonio1.png"
import "../../Styles/Cajas.css"

export function CajaTestimonio({Image, Nombre, Comentario}){
    return(
        <div className="Contenedor_Cajas_Testimonios">
            <div className="Img_Name">
                <img src={Image} alt="" />
                <h3>{Nombre}</h3>
            </div>
            <div className="Testimonio">
                <p><strong>"</strong>{Comentario}<strong>"</strong></p>
            </div>
        </div>
    )
}