import "../../Styles/Btns.css"

export function Btn_Header_Landing({Fuction, Menu, estado}){

    const Seleccionar = () =>{
        Fuction(Menu);
    }

    return(
        <div>
            <a className="Btn_Header_landing" onClick={Seleccionar} id={estado} href={`#${Menu}`}>{Menu}</a>
        </div>
    )
} 