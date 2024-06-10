import {BrowserRouter, Routes, Route,} from "react-router-dom"
import {App} from "../Pages/AppLanding"


export function Navigate(){
    return(
       
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={App}/>
              
            </Routes>
        </BrowserRouter>
    )
}