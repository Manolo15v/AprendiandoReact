export default function ItemListContainer({ texto }) {
  return (
    <main className="bg-gray-50 text-slate-900 h-screen flex items-center">
      <div className="container flex items-end">
        <h1 className="text-5xl	font-medium">{ texto }</h1>
        <div className="flex items-end gap-1 pb-1">
          <span className="animate-[bounce_1.6s_infinite] inline-flex rounded-full h-1.5 w-1.5 bg-slate-900"/>
          <span className="animate-[bounce_1.6s_infinite] animation-delay-400 inline-flex rounded-full h-1.5 w-1.5 bg-slate-900"/>
          <span className="animate-[bounce_1.6s_infinite] animation-delay-800 inline-flex rounded-full h-1.5 w-1.5 bg-slate-900"/>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 ml-6 pt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>

      </div>
    </main>
  )
}
