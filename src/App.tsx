import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Founders from './components/Founders'
import WorkSamples from './components/WorkSamples'
import Reviews from './components/Reviews'
import CoursePurchase from './components/CoursePurchase'
import PricingList from './components/PricingList'
import Community from './components/Community'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange/30 selection:text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <CoursePurchase />
        <PricingList />
        <Founders />
        <WorkSamples />
        <Reviews />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
