import {twMerge} from "tailwind-merge";
import {useAuthContext} from "../context/authContext";
import {useRazorpayContext} from "../context/razorpayContext";
import fbq from "../utils/fbq";

const EnrollButton = ({children, onClick, disabled, applyClasses}) => {
    const {handlePayment} = useRazorpayContext();
    const {isAuthenticated, setIsAuthModalOpen, hasEnrolled} = useAuthContext();
    const handleClick = () => {
        fbq("track", "InitiateCheckout", {
            currency: "INR",
            value: 999.0,
        });
        if (!isAuthenticated) {
            return setIsAuthModalOpen(true);
        }
        if (hasEnrolled) {
            return;
        }
        handlePayment();
    };
    return (
        <button
            disabled={disabled}
            className={twMerge(
                `w-full py-3 md:py-5 px-2 rounded-lg text-white gradient-bg-animation font-bold md:text-xl ${
                    disabled && "opacity-50"
                }  ${applyClasses}`
            )}
            onClick={onClick ? onClick : handleClick}
        >
            {hasEnrolled ? "You have enrolled!" : children}
        </button>
    );
};
export default EnrollButton;
