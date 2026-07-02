import './App.css'
import Difference from './components/Difference'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Intro from './components/Intro'
import Mentors from './components/Mentors'
import Navbar from './components/Navbar'
import ParkingAndCta from './components/ParkingAndCta'
import Programs from './components/Programs'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Programs />
        <Highlights />
        <Mentors />
        <Difference />
        <ParkingAndCta />
      </main>
      <Footer />
    </>
  )
}

export default App
