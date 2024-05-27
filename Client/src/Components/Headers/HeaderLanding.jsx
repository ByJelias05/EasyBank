import { Btn_Header_Landing } from "../Btns/BtnHeaderLanding";
import { Logo } from "../Logo/Logo";
import "../../Styles/HeaderLanding.css"

import { useState } from "react";

export function HeaderLanding(){

    const [estado, setEstado] = useState("Easy Bank");



    return(
        <div className="Contenedor_Header_Landing">
            <div className="Logo">
                <Logo/>
            </div>
            <div className="Menu_Landing">
                <Btn_Header_Landing Menu={"Easy Bank"} Fuction={setEstado} estado={estado == "Easy Bank" ? "active" : "Desactive"}/>
                <Btn_Header_Landing Menu={"Beneficios"} Fuction={setEstado} estado={estado == "Beneficios" ? "active" : "Desactive"}/>
                <Btn_Header_Landing Menu={"Testimonios"} Fuction={setEstado} estado={estado == "Testimonios" ? "active" : "Desactive"}/>

                <button onClick={() =>{alert(estado)}} className="Btn_Registrate">Registrate</button>
            </div>
        </div>
    )
}