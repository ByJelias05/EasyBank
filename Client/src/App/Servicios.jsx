import { CajaServicio } from "../Components/Cajas/CajaServicio"

import image1 from "../Images/Beneficio1.png"
import image2 from "../Images/Beneficio2.jpg"
import image3 from "../Images/Beneficio3.jpg"
import image4 from "../Images/Servicio1.jpg"
import image5 from "../Images/Servicio2.png"
import image6 from "../Images/Servicio3.jpg"
import image7 from "../Images/Servicio4.png"
import image8 from "../Images/Servicio5.jpg"

export function Servicios({source}){

    const data = () =>{
        console.log(source)
    }

    return(
        <div className="Contenedor_Servicios_App" style={{}}>
            <div className="Saludo">
                <h1>¡Hola!</h1>
                <h1>Jelias Garcia Sierra</h1>
            </div>
            <div className="Barra_Busqueda">
                <h3>Serv<span>icios:</span></h3>
                <div className="Input_Btn">
                    <input type="text" />
                    <button>Buscar Servicio</button>
                </div>
            </div>
            <div className="Contenedor_Servicios">
                <CajaServicio image={image1}/>
                <CajaServicio image={image2}/>
                <CajaServicio image={image3}/>
                <CajaServicio image={image4}/>
                <CajaServicio image={image5}/>
                <CajaServicio image={image6}/>
                <CajaServicio image={image7}/>
                <CajaServicio image={image8}/>
            </div>   

        </div>
    )
}