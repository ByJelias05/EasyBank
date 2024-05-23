import "../../Styles/Btns.css"

export function Btn_Header_Landing(props){
    return(
        <div>
            <a className="Btn_Header_landing" id={props.estado} href="">{props.Menu}</a>
        </div>
    )
}