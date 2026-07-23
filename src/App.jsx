import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ModelStrip from './components/ModelStrip.jsx'
import WhySection from './components/WhySection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import ModelsSection from './components/ModelsSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <ModelStrip />
        <WhySection />
        <FeaturesSection />
        <ModelsSection />
      </main>
      <Footer />
    </div>
  )
}
