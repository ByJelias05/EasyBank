import {useState, useEffect, useRef} from "react"


import "../../Styles/Cajas.css"
import "../../Styles/Login.css"

export function CreateUser(){

    const [PasoActual, setPasoActual] = useState(1)

    const BtnPaso1 = useRef(null)
    const BtnPaso2 = useRef(null)
    const BtnPaso3 = useRef(null)
    const BtnPaso4 = useRef(null)
    const BtnPaso5 = useRef(null)

    const BtnCrearCuenta = useRef(null);

    const [Nombre, setNombre] = useState('');

    const [Condicion, setCondicion] = useState(false);

    const OrdenarPorPasos = (paso) =>{
        setPasoActual(paso)


       switch(paso){
            case 1:
                BtnPaso1.current.classList.add("ActivePaso")

                BtnPaso2.current.classList.remove("ActivePaso")
                BtnPaso3.current.classList.remove("ActivePaso")
                BtnPaso4.current.classList.remove("ActivePaso")
                BtnPaso5.current.classList.remove("ActivePaso")
                break
            case 2:
                BtnPaso2.current.classList.add("ActivePaso")

                BtnPaso1.current.classList.remove("ActivePaso")
                BtnPaso3.current.classList.remove("ActivePaso")
                BtnPaso4.current.classList.remove("ActivePaso")
                BtnPaso5.current.classList.remove("ActivePaso")
                break
            case 3:
                BtnPaso3.current.classList.add("ActivePaso")

                BtnPaso1.current.classList.remove("ActivePaso")
                BtnPaso2.current.classList.remove("ActivePaso")
                BtnPaso4.current.classList.remove("ActivePaso")
                BtnPaso5.current.classList.remove("ActivePaso")
                break
            case 4:
                BtnPaso4.current.classList.add("ActivePaso")

                BtnPaso1.current.classList.remove("ActivePaso")
                BtnPaso2.current.classList.remove("ActivePaso")
                BtnPaso3.current.classList.remove("ActivePaso")
                BtnPaso5.current.classList.remove("ActivePaso")
                break
            case 5:
                BtnPaso5.current.classList.add("ActivePaso");

                BtnPaso1.current.classList.remove("ActivePaso")
                BtnPaso2.current.classList.remove("ActivePaso")
                BtnPaso3.current.classList.remove("ActivePaso")
                BtnPaso4.current.classList.remove("ActivePaso")
                break
       }
    }

    const AceptarTermino = (e) =>{
        if(e.target.checked == true){
           
            BtnCrearCuenta.current.classList.add("EncenderBtn")
        }else{
            BtnCrearCuenta.current.classList.remove("EncenderBtn")
        }

    }

    return(
        <div className="Contenedor_CreateUser"> 
            <div className="Caja_CrearUsuario">
                
                   
                <form action="http://localhost:3001/CreateUser" method="POST" name="Formulario" encType="multipart/form-data">

                   <div className={PasoActual == 1 ? 'AbrirPaso' : 'CerrarPaso'}>
                        <h1>Informacion personal</h1>

                        <div className="Caja_infoPaso">
                            <input type="text" name="Nombre"  placeholder="Nombre completo"/>
                            <input type="date" name="Nacimiento" onChange={(e) =>{setNacimiento(e.currentTarget.value)}} placeholder="Fecha de nacimiento"/>

                            <select name="Genero" id="Genero" onChange={(e) =>{setGenero(e.currentTarget.value)}}>
                                <option id="Genero" value="Masculino">Masculino</option>
                                <option id="Genero" value="Femenino">Femenino</option>
                            </select>
                            
                            <input type="text" name="Nacionalidad" placeholder="Nacionalidad"/>
                        </div>
        
                    </div>
                   
                
                    <div className={PasoActual == 2 ? 'AbrirPaso' : 'CerrarPaso'}>
                        <h1>Informacion de contacto</h1>
                        
                        <div className="Caja_infoPaso">
                            <input type="text" name="CorreoElectronico"  placeholder="Correo Electronico"/>
                            <input type="text" name="Telefono" placeholder="Numero de telefono"/>
                            <input type="text" name="Residencia" placeholder="Dirección de residencia"/>
                        </div>
            
                    </div>
                 
                
                    
                    <div className={PasoActual == 3 ? 'AbrirPaso' : 'CerrarPaso'}>
                        <h1>Informacion de identificacion</h1>

                        <div className="Caja_infoPaso">
                            <input type="text" name="Cedula" placeholder="Nunmero de identificacion o cedula"/>

                            <input type="file" name="FotoDoc" />
                            <input type="file" name="FotoUser" placeholder="Foto de usuario"/> 
                        </div>
   
                    </div>
                
                
                    <div className={PasoActual == 4 ? 'AbrirPaso' : 'CerrarPaso'}>
                        <h1>Configurar cuenta</h1>

                        <div className="Caja_infoPaso">
                            <input type="text" name="CorreoEasyBank" placeholder="Crea tu correo de easy bank"/>
                            <input type="text" name="Password" placeholder="Crea tu contraseña de easy bank"/>
                            <input type="text" name="RepetirPassword" onChange={(e) =>{setRepiteContraseña(e.currentTarget.value)}} placeholder="Repite la contraseña"/>
                        </div>

                    </div> 
                 
                 
                    <div className={PasoActual == 5 ? 'AbrirPaso' : 'CerrarPaso'}>
                        <h1>Terminos y condiciones</h1>

                        <div className="Caja_infoPaso Termino">
                            <p>"Al crear una cuenta en Easy Bank, acepto los términos y condiciones generales, la política de privacidad y el consentimiento para la verificación de identidad. Comprendo que mi información personal y financiera será recopilada, usada y protegida de acuerdo con la política de privacidad de Easy Bank. Autorizo a Easy Bank a procesar mis documentos de identificación y realizar verificaciones de crédito si es necesario."</p>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'20px', gap: '5px', color: '#fff'}}>
                                <label htmlFor="Aceptar" id="Acpertar">Acpertar los terminos</label>
                                <input style={{width:'30px'}} onChange={AceptarTermino} type="checkbox" id="Aceptar" />
                                
                            </div>

                            <button ref={BtnCrearCuenta}  type="submit">Crear Cuenta</button>
                        </div>

                       
                    </div>

                </form>
               
               
            </div>
            <div className="ContenedorPasos">
                <div onClick={()=> OrdenarPorPasos(1)} ref={BtnPaso1} className={`Caja_numero_Pasos `}>
                    <h1>1</h1>
                </div>
                <div onClick={()=> OrdenarPorPasos(2)} ref={BtnPaso2} className={`Caja_numero_Pasos `}>
                    <h1>2</h1>
                </div>
                <div onClick={()=> OrdenarPorPasos(3)} ref={BtnPaso3} className={`Caja_numero_Pasos `}>
                    <h1>3</h1>
                </div>
                <div onClick={()=> OrdenarPorPasos(4)} ref={BtnPaso4} className={`Caja_numero_Pasos `}>
                    <h1>4</h1> 
                </div>
                <div onClick={()=> OrdenarPorPasos(5)} ref={BtnPaso5} className={`Caja_numero_Pasos `}>
                    <h1>5</h1>
                </div>
            </div>
        </div>
    )
}

