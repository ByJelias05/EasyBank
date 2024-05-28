import "../../Styles/Testimonio.css"
import { CajaTestimonio } from "../Cajas/CajasTestimonios"


import { useEffect, useState } from "react"

export function Testimonios({Data}){

    const [Testimonios, setTestimonios] = useState([Data.Testimonios])

    useEffect(() =>{
        setTestimonios([Data.Testimonios])
    },[])

    return(
        <div id="Testimonios" className="Contenedor_Testimonios_Landing">
            <div className="Titulo_Testimonios">
                <h2 className="titulo_T1">TESTIMONIOS HECHOS</h2>
                <h1 className="titulo_T2">POR USUARIOS QUE USAN</h1>
                <h2 className="titulo_T3"><span>EASY</span> BANK</h2>
            </div>
            <div className="Contenedor_Testimonios">
            {
                Data.Testimonios.map((items) =>(
                <div >
                    <CajaTestimonio Image={items.Image} Nombre={items.Nombre} Comentario={items.Comentario}/>
                   
                </div>
                
                ))
            }
            </div>
        </div>
    )
}