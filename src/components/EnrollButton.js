import moment from "moment";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useAuthContext } from "../context/authContext";
import { useRazorpayContext } from "../context/razorpayContext";

const EnrollButton = ({ children, onClick, disabled, applyClasses }) => {
  const { handlePayment} = useRazorpayContext();
  const { isAuthenticated, setIsAuthModalOpen, hasEnrolled} = useAuthContext();
  const handleClick = () => {
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
