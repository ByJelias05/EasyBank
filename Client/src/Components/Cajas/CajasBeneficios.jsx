import "../../Styles/Cajas.css"

import image1 from "../../Images/Beneficio3.jpg"
import image2 from "../../Images/mipymes_Covid19b_resized.jpg"
 import image3 from "../../Images/tata.png"

export function CajasBeneficios(){
    return(
        <div className="Contenedor_Cajas_Beneficios">
            <div className="Imagen_Beneficio">
                 <img src={image1} alt="" /> 

                    <div className="Informacion_Beneficio">
                        <h5>Easy Bank</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dicta modi quaerat labore eos velit voluptatem maxime in at consequuntur cum facilis eligendi, illo nisi impedit quisquam? Odit, molestiae rerum!</p>
                    </div>
            </div>
            
        </div>
    )
}