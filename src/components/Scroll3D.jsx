import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Scroll3D() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotateXSphere = useTransform(scrollYProgress, [0, 1], [10, -20])
  const rotateYSphere = useTransform(scrollYProgress, [0, 1], [-15, 25])
  const sphereScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.15, 1])
  const sphereY = useTransform(scrollYProgress, [0, 1], [60, -60])

  const rotateXCube = useTransform(scrollYProgress, [0, 1], [-8, 18])
  const rotateYCube = useTransform(scrollYProgress, [0, 1], [12, -22])
  const cubeScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.1])
  const cubeY = useTransform(scrollYProgress, [0, 1], [40, -40])

  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const ringScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2])
  const ringY = useTransform(scrollYProgress, [0, 1], [80, -20])
  const ringOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])

  return (
    <section ref={ref} className="relative h-[200vh] bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),rgba(168,85,247,0.18),rgba(236,72,153,0.10),transparent_70%)]" />
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 [perspective:1200px]">
          {/* Floating gradient sphere */}
          <motion.div
            style={{ rotateX: rotateXSphere, rotateY: rotateYSphere, scale: sphereScale, y: sphereY }}
            className="absolute left-[10%] top-[20%] h-40 w-40 sm:h-56 sm:w-56 rounded-full shadow-2xl"
          >
            <div className="h-full w-full rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#6366F1_0%,#8B5CF6_25%,#EC4899_60%,#F59E0B_100%)]" />
            <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20" />
          </motion.div>

          {/* Glassy tilted cube */}
          <motion.div
            style={{ rotateX: rotateXCube, rotateY: rotateYCube, scale: cubeScale, y: cubeY }}
            className="absolute right-[12%] top-[35%] h-44 w-44 sm:h-56 sm:w-56 rounded-2xl"
          >
            <div className="h-full w-full rounded-2xl bg-white/30 backdrop-blur-xl ring-1 ring-slate-200/60 shadow-2xl shadow-indigo-500/10" />
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(60%_80%_at_50%_0%,rgba(99,102,241,0.25),rgba(168,85,247,0.18),transparent)]" />
          </motion.div>

          {/* Neon ring */}
          <motion.div
            style={{ rotateZ: ringRotate, scale: ringScale, y: ringY, opacity: ringOpacity }}
            className="absolute left-1/2 top-[60%] -translate-x-1/2"
          >
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full">
              <div className="absolute inset-0 rounded-full ring-2 ring-transparent [background:conic-gradient(from_0deg,#6366F1,#8B5CF6,#EC4899,#F59E0B,#6366F1)] [mask-composite:exclude] [mask:radial-gradient(circle,transparent_58%,#000_60%)]" />
              <div className="absolute inset-0 blur-xl opacity-50 rounded-full bg-[conic-gradient(from_0deg,#6366F1,#8B5CF6,#EC4899,#F59E0B,#6366F1)]" />
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">Immersive by default</h3>
            <p className="mt-4 text-slate-600 text-lg">Scroll to explore subtle 3D motion. Our UI responds to context with fluid depth, parallax, and glassy highlights—bringing your AI to life without getting in the way.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
