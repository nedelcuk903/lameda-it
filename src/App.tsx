import HeroSection from './components/HeroSection';
import Services from './components/About'
import Reviews from './components/Reviews'
import Steps from './components/Steps'
import Footer from './components/Footer'
import Team from './components/Team'
import License from './components/License';
import ContactForm from './components/ContactForm';

import AnimatedElement from './hooks&HOCs/AnimatedElement';

function App() {
  return (
    <div className='bg-slate-200 overflow-x-hidden'>
      <HeroSection />
      <Services />
      <Steps />
      <AnimatedElement direction='left'>
        <hr className='bg-gradient-to-r from-cyan-600 to-cyan-500 opacity-1 w-4/5 mx-auto h-1 rounded m-0 p-0 border-none' />
      </AnimatedElement>
      <Reviews />
      <License />
      <Team />
      <ContactForm />
      <Footer />
      {/* Rest of the hero section content */}
    </div>
  )
}

export default App;
