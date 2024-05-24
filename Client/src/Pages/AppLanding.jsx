
import { FooterLanding } from '../Components/Footers/FooterLanding'
import { HeaderLanding } from '../Components/Headers/HeaderLanding'
import { Beneficios } from '../Components/Sections/Beneficios'
import { EasyBank } from '../Components/Sections/EasyBank'
import { Testimonios } from '../Components/Sections/Testimonios'
import '../Styles/App.css'

function App() {

  return (
    <>
     <div className='Contenedor_LandingPage'>
        <div className='pp'>
          <HeaderLanding/>
        </div>
        <div>
          <EasyBank/>
          <Beneficios/>
          <Testimonios/>
          <FooterLanding/>
        </div>
     </div>
    </>
  )
}

export default App
