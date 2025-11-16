export default function CTA() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden ring-1 ring-slate-200 bg-white">
          <div className="relative p-10 md:p-16 lg:p-20">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(168,85,247,0.12),rgba(236,72,153,0.05),rgba(255,255,255,0))]" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Start in minutes. Scale to millions.</h3>
                <p className="mt-4 text-slate-600 max-w-xl">Use the free tier to prototype. Upgrade when you need dedicated throughput, control, and support.</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 font-medium shadow-sm hover:shadow-md hover:bg-slate-800 transition-all">Get started</a>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 font-medium hover:bg-slate-50 transition-all">Talk to sales</a>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[{
                  title: 'Free', price: '$0', desc: '10k minutes/month, community support'
                }, {
                  title: 'Pro', price: '$49', desc: 'Priority throughput, analytics, fine‑tuning'
                }, {
                  title: 'Business', price: 'Custom', desc: 'SSO, data residency, private cloud'
                }, {
                  title: 'Enterprise', price: 'Talk to us', desc: 'SLAs, dedicated cluster, on‑prem'
                }].map((p) => (
                  <div key={p.title} className="rounded-2xl ring-1 ring-slate-200 p-6 bg-white/70">
                    <div className="text-sm text-slate-500">{p.title}</div>
                    <div className="mt-2 text-3xl font-semibold text-slate-900">{p.price}</div>
                    <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
