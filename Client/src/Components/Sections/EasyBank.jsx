import "../../Styles/EasyBank.css"
import { Tema } from "../Ventanitas/Temas"

import image from "../../Images/Tema1.png"

export function EasyBank(){
    return(
        <div className="Contenedor_Info_Landing">
            <div className="Panel_Izquierdo_Landing">
                <div className="Informaciones_EasyBank">
                    <h3 className="Titulo">Easy Bank</h3>
                    <h1 className="Subtitulo_Uno">EL BANCO ONLINE MAS SEGURO</h1>
                    <h1 className="Subtitulo_Dos">Y EFICAZ DE LA REGION.</h1>
                    <p className="Parrafo_EasyBank">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, enim alias, possimus incidunt ab, quia vel quod atque eius esse ipsum aliquid! Voluptas tempora aperiam sit excepturi esse quidem facilis.</p>
                </div>
                <div className="Contenedor_Temas">
                    <Tema status={"select"}/>
                    <Tema />
                    <Tema/>
                    <Tema/>
                </div>
            </div>
            <div className="Panel_Derecho_Landing">
                    <img src={image} alt="" />
            </div>
        </div>
    )
}