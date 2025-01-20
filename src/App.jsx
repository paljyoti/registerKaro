
import './App.css'
import About from './Component/About'
import Blogs from './Component/Blogs'
import Choose from './Component/Choose'
import Clients from './Component/Clients'
import Companylogo from './Component/Companylogo'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Intro from './Component/Intro'
import Navbar from './Component/Navbar'
import Services from './Component/Services'
import Trusted from './Component/Trusted'

function App() {
  

  return (
    <>
      <div>
       {/* <Navbar/> */}
       <Header/>
       <Trusted/>
       <Services/>
       <About/>
       <Choose/>
       <Intro/>
       <Clients/>
       {/* <Blogs/> */}
       {/* <Companylogo/> */}
       <Footer/>
      </div>
    </>
  )
}

export default App
