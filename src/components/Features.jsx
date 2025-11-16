import { Cpu, Waves, ShieldCheck, Workflow } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Neural speech stack',
    desc: 'Low-latency ASR, expressive TTS, and intent extraction tuned for contact centers.'
  },
  {
    icon: Workflow,
    title: 'Agent tools',
    desc: 'Connect to CRMs, RDBMS, and internal APIs. Compose flows that resolve tasks.'
  },
  {
    icon: Waves,
    title: 'Realtime streaming',
    desc: 'Half‑duplex and interruptible turns with word‑level timestamps and emotions.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise‑ready',
    desc: 'SOC2 in progress, SSO/SAML, data residency, and private cloud options.'
  }
]

export default function Features() {
  return (
    <section id="product" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Build voice that works</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Everything you need to prototype, evaluate, and deploy production‑grade AI voice agents.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl ring-1 ring-slate-200 p-6 bg-white/70">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 mb-4 flex items-center justify-center text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
