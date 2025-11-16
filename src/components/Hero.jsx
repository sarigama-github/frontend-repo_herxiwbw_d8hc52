import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 flex flex-col items-start justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 text-indigo-700 ring-1 ring-indigo-600/20 px-3 py-1 text-sm font-medium"
          >
            Next‑gen AI Voice Agents
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900"
          >
            Talk to your data.
            <br />
            Scale your support.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-xl"
          >
            Auralink turns voice into action. Deploy human‑like voice agents that understand intent, access systems, and resolve tasks end‑to‑end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium shadow-sm hover:shadow-md hover:bg-slate-800 transition-all"
            >
              Start free trial
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 font-medium hover:bg-slate-50 transition-all"
            >
              See live demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              'Realtime ASR',
              'Agentic workflows',
              'Tools & APIs',
              'Enterprise‑grade',
            ].map((t) => (
              <div key={t} className="text-sm text-slate-600">
                <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 mb-2" />
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[420px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-slate-200/50 bg-white/60 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="absolute -inset-1 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(99,102,241,0.15),rgba(168,85,247,0.12),rgba(236,72,153,0.10),rgba(255,255,255,0))]" />
            <div className="relative p-6 flex flex-col h-full">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-slate-500">Live voice session</span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-slate-100/80 ring-1 ring-slate-200/60" />
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3">
                <button className="flex-1 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm">Call agent</button>
                <button className="rounded-lg ring-1 ring-slate-200 px-4 py-2 text-sm">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
