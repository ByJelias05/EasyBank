import {useState} from "react"


export function CreateUser(){

    const [PasoActual, setPasoActual] = useState(1)

    const OrdenarPorPasos = (paso) =>{
        setPasoActual(paso)
    }

    const Render = () =>{
        if(PasoActual = 1){
           return <p>hola</p>
        }
    }

    return(
        <div className="Contenedor_CreateUser"> 
            <div className="Caja_CrearUsuario">
                {
                    PasoActual == 1 ?  <InfoPersonal/> : null
                }
                {
                    PasoActual == 2 ?  <InfoContacto/> : null
                }
                {
                    PasoActual == 3 ?  <InfoIdentificacion/> : null
                }
                {
                    PasoActual == 4 ?  <Configuracion/> : null
                }
                {
                    PasoActual == 5 ?  <Verificacion/> : null
                }
               
            </div>
            <div className="ContenedorPasos">
                <div onClick={()=> OrdenarPorPasos(1)} className="Caja_numero_Pasos">
                    <h1>1</h1>
                </div>
                <div onClick={()=> OrdenarPorPasos(2)} className="Caja_numero_Pasos">
                    <h1>2</h1>
                </div>
                <div onClick={()=> OrdenarPorPasos(3)} className="Caja_numero_Pasos">
                    <h1>3</h1>
                </div>
                <div onClick={()=> OrdenarPorPasos(4)} className="Caja_numero_Pasos">
                    <h1>4</h1>
                </div>
                <div onClick={()=> OrdenarPorPasos(5)} className="Caja_numero_Pasos">
                    <h1>5</h1>
                </div>
            </div>
        </div>
    )
}

function InfoPersonal(){
    return(
        <div>
            <h1>Informacion personal</h1>
            <input type="text" placeholder="Nombre completo"/>
                <input type="date" placeholder="Fecha de nacimiento"/>
                <select name="" id="">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <input type="text" placeholder="Nacionalidad"/>
        </div>
    )
}


function InfoContacto(){
    return(
        <div>
            <h1>Informacion de contacto</h1>
            <input type="text" placeholder="Correo Electronico"/>
            <input type="text" placeholder="Numero de telefono"/>
            <input type="text" placeholder="Dirección de residencia"/>
        </div>
    )
}


function InfoIdentificacion(){
    return(
        <div>
            <h1>Informacion de identificacion</h1>
            <input type="text" placeholder="Nunmero de identificacion o cedula"/>
            <input type="file" placeholder="Foto del documento"/>
            <input type="file" placeholder="Foto de usuario"/>
        </div>
    )
}


function Configuracion(){
    return(
        <div>
            <h1>Configurar cuenta</h1>
            <input type="text" placeholder="Crea tu correo de easy bank"/>
            <input type="text" placeholder="Crea tu contraseña de easy bank"/>
            <input type="text" placeholder="Repite la contraseña"/>
        </div>
    )
}

function Verificacion(){
    return(
        <div>
            <h1>Configurar cuenta</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
    )
}