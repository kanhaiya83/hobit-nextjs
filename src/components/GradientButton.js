const GradientButton =({children,applyClasses,onClick})=>{
    return <button class={` ${applyClasses} w-full rounded-lg gradient-btn text-white font-semibold`} onClick={onClick}>{children}</button>
}
export default GradientButton