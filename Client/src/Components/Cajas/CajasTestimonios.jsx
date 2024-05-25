import image from "../../Images/g.jpg"
import "../../Styles/Cajas.css"

export function CajaTestimonio(){
    return(
        <div className="Contenedor_Cajas_Testimonios">
            <div className="Img_Name">
                <img src={image} alt="" />
                <h3>Horacio Vazque</h3>
            </div>
            <div className="Testimonio">
                <p><strong>"</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, nostrum. Nisi ratione asperiores eligendi maiores voluptate similique, ipsa harum iusto incidunt aliquid iure aut perferendis dignissimos. Rerum sint nemo voluptatem! <strong>"</strong></p>
            </div>
        </div>
    )
}