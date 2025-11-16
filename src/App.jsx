import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Scroll3D from './components/Scroll3D'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Scroll3D />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Auralink AI. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-slate-600">
            <a href="#privacy" className="hover:text-slate-900">Privacy</a>
            <a href="#terms" className="hover:text-slate-900">Terms</a>
            <a href="#security" className="hover:text-slate-900">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
