
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-20 bg-slate-900/30 border-t border-slate-800 text-slate-500">
        <p className="text-base">
            &copy; {new Date().getFullYear()} Hairum Qureshi. All rights reserved.
        </p>
    </div>
  )
}
