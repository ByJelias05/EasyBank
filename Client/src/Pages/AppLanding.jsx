
import { FooterLanding } from '../Components/Footers/FooterLanding'
import { HeaderLanding } from '../Components/Headers/HeaderLanding'
import { Beneficios } from '../Components/Sections/Beneficios'
import { EasyBank } from '../Components/Sections/EasyBank'
import { Testimonios } from '../Components/Sections/Testimonios'
import '../Styles/App.css'

import {DataEasyBank} from "../Data/Array"

import { useEffect, useState } from 'react'

function App() {

  const [Data, setData] = useState([]);

  useEffect(() =>{
    setData(DataEasyBank)
  
  })


  return (
    <>
     <div className='Contenedor_LandingPage'>
        <div className='pp'>
          <HeaderLanding/>
        </div>
        <div>
          <EasyBank Data={DataEasyBank}/>
          <Beneficios  Data={Data}/>
          <Testimonios Data={Data}/>
          <FooterLanding/>
        </div>
     </div>
    </>
  )
}

export default App
