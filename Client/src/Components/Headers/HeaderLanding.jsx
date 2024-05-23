import { Btn_Header_Landing } from "../Btns/BtnHeaderLanding";
import { Logo } from "../Logo/Logo";
import "../../Styles/HeaderLanding.css"

export function HeaderLanding(){
    return(
        <div className="Contenedor_Header_Landing">
            <div className="Logo">
                <Logo/>
            </div>
            <div className="Menu_Landing">
                <Btn_Header_Landing Menu={"Easy Bank"} estado={"active"}/>
                <Btn_Header_Landing Menu={"Beneficios"}/>
                <Btn_Header_Landing Menu={"Testimonios"}/>

                <button className="Btn_Registrate">Registrate</button>
            </div>
        </div>
    )
}