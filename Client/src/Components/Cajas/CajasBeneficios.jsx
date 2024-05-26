import "../../Styles/Cajas.css"

//import image1 from "../../Images/Beneficio3.jpg"
import { useEffect, useState } from "react"

export function CajasBeneficios({Image, Titulo, Parrafo}){


return(
        <div className="Contenedor_Cajas_Beneficios">
            <div className="Imagen_Beneficio">
                 <img src={Image} alt="" /> 

                    <div className="Informacion_Beneficio">
                        <h5>{Titulo}</h5>
                        <p>{Parrafo}</p>
                    </div>
            </div>
            
        </div>
    )
}