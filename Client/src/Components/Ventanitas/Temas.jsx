import image1 from "../../Images/Tema1.png"
// import image2 from "../../Images/Tema2.png"
// import image3 from "../../Images/Tema3.png"
// import image4 from "../../Images/Tema4.png"
import "../../Styles/IconoTema.css"

export function Tema(props){
    return(
        <div className="Tema">
            <img className={props.status} src={image1} alt="" />
            
        </div>
    )
}