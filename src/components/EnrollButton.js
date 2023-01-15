import { twMerge } from "tailwind-merge"
import { useAuthContext } from "../context/authContext"
import { makePayment } from "../utils/razorpay"

const EnrollButton =({children,onClick,disabled,applyClasses})=>{
    const {isAuthenticated,setIsAuthModalOpen,hasEnrolled} = useAuthContext()
    const defaultHandleClick=()=>{
        if(!isAuthenticated){
            return setIsAuthModalOpen(true);
        }
        makePayment({amount:23,currency:"INR"});
    }
    return <button disabled={disabled} className={twMerge(`w-full py-3 md:py-5 px-2 rounded-lg text-white gradient-btn font-bold text-xl ${disabled && "opacity-50"}  ${applyClasses}`)} onClick={onClick ?onClick :defaultHandleClick}>{hasEnrolled?"You have enrolled!":children}</button>
}
export default EnrollButton