import { twMerge } from "tailwind-merge"
import { useAuthContext } from "../context/authContext"
import { useRazorpayContext } from "../context/razorpayContext"

const EnrollButton =({children,onClick,disabled,applyClasses})=>{
    const {handlePayment,pageData} = useRazorpayContext();
    const {isAuthenticated,setIsAuthModalOpen,hasEnrolled,slot} = useAuthContext()
    const defaultHandleClick=()=>{
        if(!isAuthenticated){
            return setIsAuthModalOpen(true);
        }
        if(hasEnrolled){
            return;
        }
        handlePayment({amount : pageData.price,currency:"INR",course:pageData.campaign_id,slot});
    }
    return <button disabled={disabled} className={twMerge(`w-full py-3 md:py-5 px-2 rounded-lg text-white gradient-btn font-bold md:text-xl ${disabled && "opacity-50"}  ${applyClasses}`)} onClick={onClick ?onClick :defaultHandleClick}>{hasEnrolled?"You have enrolled!":children}</button>
}
export default EnrollButton