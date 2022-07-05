export default function DotsAnimation() {
  return (
    <div className="flex items-end gap-1 pb-1">
        <span className="animate-[bounce_1.6s_infinite] inline-flex rounded-full h-1.5 w-1.5 bg-slate-900"/>
        <span className="animate-[bounce_1.6s_infinite] [animation-delay:400ms] inline-flex rounded-full h-1.5 w-1.5 bg-slate-900"/>
        <span className="animate-[bounce_1.6s_infinite] [animation-delay:800ms] inline-flex rounded-full h-1.5 w-1.5 bg-slate-900"/>
    </div>
  )
}
