import type { JSX } from "react/jsx-runtime";

export default function Pill({
  index,
  tailwindColor,
  icon,
  skillData,
}: {
  index: number;
  tailwindColor: string;
  icon: JSX.Element;
  skillData: string;
}) {
  return (
    <div
      key={index}
      className="
        group inline-flex items-center gap-2
        rounded-full
        border border-slate-700/60
        bg-slate-800/50
        px-3 py-1.5
        text-sm font-medium text-slate-300
        shadow-sm
        transition-all duration-200
        hover:border-slate-600
        hover:bg-slate-800
        hover:text-white
        hover:shadow-md
      "
    >
      <span
        className={`
          flex items-center justify-center
          text-base
          transition-transform duration-200
          group-hover:scale-110
          ${tailwindColor}
        `}
      >
        {icon}
      </span>

      <span>{skillData}</span>
    </div>
  );
}
