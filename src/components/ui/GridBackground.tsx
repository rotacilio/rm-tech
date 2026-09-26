export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      <div className="bg-grid animate-grid-pan mask-fade-b absolute inset-0 opacity-70" />

      <div className="animate-float absolute -top-32 left-[8%] h-[26rem] w-[26rem] rounded-full bg-violet/25 blur-[120px]" />
      <div className="animate-float-slow absolute top-[20%] right-[4%] h-[22rem] w-[22rem] rounded-full bg-cyan/15 blur-[120px]" />
      <div className="animate-float-slow absolute bottom-[-10%] left-[30%] h-[30rem] w-[30rem] rounded-full bg-magenta/10 blur-[140px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-void)_78%)]" />
    </div>
  )
}
