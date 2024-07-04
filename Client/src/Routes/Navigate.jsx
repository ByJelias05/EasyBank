import {BrowserRouter, Routes, Route,} from "react-router-dom"
import {App} from "../Pages/AppLanding"
import { AppEasyBank } from "../Pages/AppEasyBank"


export function Navigate(){
    return(
       
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={App}/>
                <Route path="/EasyBank" Component={AppEasyBank}/>
                <Route path="*" element={"Ruede mio y excusame 🤣"}/>
            </Routes>
        </BrowserRouter>
    )
}