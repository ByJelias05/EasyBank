import "../../Styles/Login.css"
import {useState} from "react"
import { CreateUser } from "../Cajas/CajaCreateUser";

export function Login({Menu}){

    const [ActivarCrear, setActivarCrear] = useState(false);

    const ActivarCrearCuenta = () =>{
        setActivarCrear(!ActivarCrear);
    }

    return(
        <div className="Contenedor_Login" id="Login">
            <div className="Lateral_Derecho_Login">
                <div className="Contenedor_Registro">
                    {
                        ActivarCrear ?
                            <CreateUser/>
                        :
                        <>
                            <input type="text" placeholder="Usuario"/>
                            <input type="text" placeholder="Contraseña"/>
                            <button>Iniciar sesion</button>
                        </>
                    }
                </div>
            </div>
            <div className="Lateral_Izquierdo_Login">
                <div className="Titulo_Login">
                    <h2 className="titulo_L1">INICIA SESION O CREA</h2>
                    <h1 className="titulo_L2">TU CUENTA DE</h1>
                    <h2 className="titulo_L3"><span>EASY</span> BANK</h2>

                    {
                        ActivarCrear ?
                        <button className="BtnCrearCuenta" onClick={ActivarCrearCuenta}>¡ iniciar sesion !</button>
                        :
                        <button className="BtnCrearCuenta" onClick={ActivarCrearCuenta}>¡ Crear tu primera cuenta !</button>
                    }
                </div>
            </div>
        </div>
    )
}