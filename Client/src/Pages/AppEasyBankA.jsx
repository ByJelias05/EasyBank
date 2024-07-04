import { useState, useEffect } from "react"
import '../Styles/AppEB.css'
import image from "../Images/Tema1.png"
import { GeneralApp } from "../App/GeneralApp";

export function AppEasyBank(){

    //const [p, setp] = useState();

    //const [estado, setEstado] = useState("");
    const [USuario, setUSuario] = useState({});

    //const array = [];

        useEffect(() =>{
            const data = JSON.parse(localStorage.getItem("UserEasyBnk"));
            setUSuario(data)

        },[])

    return(
        <div className="ContenedorApp">
            {
                USuario.Estado == "exitoso" ?
                    <GeneralApp/>
                :
                <h1>Cuenta incorrecta</h1>
            }
        </div>
    )
}