import "../../Styles/EasyBank.css"
import { Tema } from "../Ventanitas/Temas"

import image1 from "../../../public/Images/Tema1.png"
import image2 from "../../../public/Images/Tema2.png"
import image3 from "../../../public/Images/Tema3.png"
import image4 from "../../../public/Images/Tema4.png"

import {useEffect, useState} from "react";

export function EasyBank({Data}){

    const [Slide, setSlide] = useState([]);

    useEffect(() =>{
        console.log(Data["Sliders"])
        setSlide([(Data["Sliders"].find((value) => value.id == 1))])
    },[])

    //const dara = [(Data["Sliders"].find((value) => value.id == 1))]
   

    const onClick = (id) =>{
        setSlide([(Data["Sliders"].find((value) => value.id == id))])
    }
  
    return(
        <div>
            {
                Slide.map((items) =>(
                    <div className="Contenedor_Info_Landing">
                <div className="Panel_Izquierdo_Landing">
                    <div className="Informaciones_EasyBank">
                        <h3 className="Titulo">{items.TituloL1}</h3>
                        <h1 className="Subtitulo_Uno">{items.TituloL2}</h1>
                        <h1 className="Subtitulo_Dos">{items.TituloL3}</h1>
                        <p className="Parrafo_EasyBank">{items.Parrafo}</p>
                    </div>
                    <div className="Contenedor_Temas">
                        <Tema onCli={onClick} status={"select"} Acerca={"EasyBank"} Image={image1}/>
                        <Tema onCli={onClick} Acerca={"Uso"} Image={image3}/>
                        <Tema onCli={onClick} Acerca={"Seguridad"} Image={image2}/>
                        <Tema onCli={onClick} Acerca={"Servicio"} Image={image4}/>
                    </div>
                </div>
                <div className="Panel_Derecho_Landing">
                        <img src={items.Image} alt="" />
                </div>
            </div>
                ))
            }
        </div>
    )
}