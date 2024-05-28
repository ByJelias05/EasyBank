import image1 from "../../Images/Tema1.png"
// import image2 from "../../Images/Tema2.png"
// import image3 from "../../Images/Tema3.png"
// import image4 from "../../Images/Tema4.png"
import "../../Styles/IconoTema.css"

import { useEffect } from "react"

export function Tema({status, Acerca, onCli, Image}){

    useEffect(() =>{
      
    })

    const Verificar_Tema = () =>{
        if(Acerca == "EasyBank"){
            onCli(1, "EasyBank")
        }
        else if(Acerca == "Uso"){
            onCli(2, "Uso")
        }
        else if(Acerca == "Seguridad"){
            onCli(3, "Seguridad")
        }
        else if(Acerca == "Servicio"){
            onCli(4, "Servicio");
        }
    }

    return(
        <div className="Tema">
            <img onClick={Verificar_Tema} className={status} src={Image} alt="" />
        </div>
    )
}