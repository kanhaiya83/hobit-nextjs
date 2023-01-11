const GradientButton =({children,applyClasses,onClick,disabled})=>{
    return <button disabled={disabled} className={` ${applyClasses} w-full rounded-lg text-white gradient-btn font-semibold ${disabled && "opacity-50"}`} onClick={onClick}>{children}</button>
}
export default GradientButton