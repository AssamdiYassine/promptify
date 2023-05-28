
import './App.css'
import FirstSection from './component/FirstSection'
import Footer from './component/Footer'
import NavBar2 from './component/NavBar2'
import TrendingPrompts from './component/TrendingPrompts'

function App() {

  return (
    <>
      <div className="bg-[url('../../public/Backgroud.svg')] bg-cover bg-no-repeat backdrop-opacity-60  top-200">

        <NavBar2 />
        <FirstSection />

      </div>

      <TrendingPrompts />

      <Footer />
    </>
  )
}

export default App
