import "../../Styles/EasyBank.css"
import { Tema } from "../Ventanitas/Temas"

import image1 from "../../../public/Images/Tema1.png"
import image2 from "../../../public/Images/Tema2.png"
import image3 from "../../../public/Images/Tema3.png"
import image4 from "../../../public/Images/Tema4.png"

import {useEffect, useState} from "react";

export function EasyBank({Data}){

    const [Slide, setSlide] = useState([]);
    const [Id, setId] = useState(1);

    const [animacion, setAnimacion] = useState("");
    const [animacion2, setAnimacion2] = useState("");
    const [animacion3, setAnimacion3] = useState("");
    const [animacion4, setAnimacion4] = useState("");

    useEffect(() =>{
        setSlide([(Data["Sliders"].find((value) => value.id == 1))])
    },[]);
   
    const onClick = (id) =>{
        setSlide([(Data["Sliders"].find((value) => value.id == id))])
        setId(id);

        setAnimacion(id != Id ? 'animated' : 'noAnimated');
        setTimeout(() =>{
            setAnimacion('noAnimated')
        }, 300);

        setAnimacion2(id != Id ? 'animated2' : 'noAnimated');
        setTimeout(() =>{
            setAnimacion2('noAnimated')
        }, 300);

        setAnimacion3(id != Id ? 'animated3' : 'noAnimated');
        setTimeout(() =>{
            setAnimacion3('noAnimated')
        }, 300);

        setAnimacion4(id != Id ? 'animated4' : 'noAnimated');
        setTimeout(() =>{
            setAnimacion4('noAnimated')
        }, 300);
    }
   
    return(
        <div>
            {
                Slide.map((items) =>(
                    <div className="Contenedor_Info_Landing" id="Easy Bank">
                <div className="Panel_Izquierdo_Landing">
                    <div className="Informaciones_EasyBank">
                        <h3 className={`Titulo ${animacion2}`}>{items.TituloL1}</h3>
                        <h1 className={`Subtitulo_Uno ${animacion}`}>{items.TituloL2}</h1>
                        <h1 className={`Subtitulo_Dos ${animacion}`}>{items.TituloL3}</h1>
                        <p className={`Parrafo_EasyBank ${animacion3}`}>{items.Parrafo}</p>
                    </div>
                    <div className="Contenedor_Temas">
                        <Tema onCli={onClick} status={Id == 1 ? "select" : "NoSelect"} Acerca={"EasyBank"} Image={image1}/>
                        <Tema onCli={onClick} status={Id == 2 ? "select" : "NoSelect"} Acerca={"Uso"} Image={image3}/>
                        <Tema onCli={onClick} status={Id == 3 ? "select" : "NoSelect"} Acerca={"Seguridad"} Image={image2}/>
                        <Tema onCli={onClick} status={Id == 4 ? "select" : "NoSelect"} Acerca={"Servicio"} Image={image4}/>
                    </div>
                </div>
                <div className="Panel_Derecho_Landing">
                        <img className={animacion4} src={items.Image} alt="" />
                </div>
            </div>
                ))
            }
        </div>
    )
}