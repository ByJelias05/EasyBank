import "../../Styles/Beneficios.css"
import { CajasBeneficios } from "../Cajas/CajasBeneficios"

import { useEffect, useState } from "react"

export function Beneficios({Data}){

    const [Beneficios, setBeneficios] = useState([Data.Beneficios])

    useEffect(() =>{
        setBeneficios(Data.Beneficios)
        console.log(Beneficios)
    },[])

    return(
        <div id="Beneficios" className="Contenedor_Beneficios_Landing">
            <div className="Titulo_Beneficios">
                <h1>BENEFICIOS QUE OFRECE <span>EASY BANK</span></h1>
            </div>
            <div className="ContenedorCajas">
                {
                    Beneficios.map((items) =>(
                        <>
                        <CajasBeneficios
                            Image ={items.Image}
                            Titulo ={items.Titulo}
                            Parrafo ={items.Parrafo}

                            
                        />
                        </>
                        
                    ))
                }
            </div>
        </div>
    )
}