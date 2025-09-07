import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navigation from './components/navigation'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <div className='overflow-x-hidden'>
      <header>
      <Navigation />
      </header>
      <main>
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      </main>
      <Footer />
     </div>
    </>
  )
}

export default App
