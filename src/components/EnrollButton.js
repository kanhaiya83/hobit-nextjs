import { twMerge } from "tailwind-merge"

const EnrollButton =({children,onClick,disabled,applyClasses})=>{
    return <button disabled={disabled} className={twMerge(`w-full py-3 md:py-5 px-2 rounded-lg text-white gradient-btn font-bold text-xl ${disabled && "opacity-50"}  ${applyClasses}`)} onClick={onClick}>{children}</button>
}
export default EnrollButton