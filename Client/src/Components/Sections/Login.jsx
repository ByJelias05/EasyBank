import "../../Styles/Login.css"
import {useState} from "react"
import { CreateUser } from "../Cajas/CajaCreateUser";
import axios from "axios"


export function Login({Menu}){

    const [ActivarCrear, setActivarCrear] = useState(false);

    const [Correo, setCorreo] = useState("");
    const [Contraseña, setContraseña] = useState("");

    const ActivarCrearCuenta = () =>{
        setActivarCrear(!ActivarCrear);
    }

    const info = () =>{
        axios.post("http://localhost:3001/Login", 
        {
            correo: Correo,
            contraseña: Contraseña

        }).then((response) => {
            const Id = response.data.data[0].Id;
            const Estado = response.data.estado;
            localStorage.setItem("UserEasyBnk", JSON.stringify({Id, Estado}));
            if(response.data.estado == "exitoso"){
                window.location.href = "http://localhost:5173/EasyBank"
            }
        })
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
                            <h1>Iniciar Sesion</h1>
                            <input type="text" onChange={(e) =>{setCorreo(e.target.value)}} placeholder="Usuario"/>
                            <input type="text" onChange={(e) =>{setContraseña(e.target.value)}} placeholder="Contraseña"/>
                            <button onClick={info}>Iniciar sesion</button>
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