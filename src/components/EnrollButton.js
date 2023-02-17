import moment from "moment";
import { twMerge } from "tailwind-merge";
import { useAuthContext } from "../context/authContext";
import { useRazorpayContext } from "../context/razorpayContext";
const getProductUID=(campaignId,date)=>{
    const keys={
        zumba:"AZumba",
        yoga:"Yoga",
        bhangra:"Bhangra",
        bellydance:"BellyDance",
        cooking:"Cooking"
    }
    if(!keys[campaignId])return null;
    const productUID=`${keys[campaignId]}_${moment(date).format('MM-DD-YYYY')}`
    return productUID
}
const EnrollButton = ({ children, onClick, disabled, applyClasses }) => {
  const { handlePayment, pageData } = useRazorpayContext();
  const { isAuthenticated, setIsAuthModalOpen, hasEnrolled, slot } =
    useAuthContext();
  const defaultHandleClick = () => {
    if (!isAuthenticated) {
      return setIsAuthModalOpen(true);
    }
    if (hasEnrolled) {
      return;
    }
    handlePayment({
      amount: pageData.price,
      campaignId: pageData.campaign_id,
      slot,
      productUID:getProductUID(pageData.campaign_id,pageData.startDate)
    });
  };
  return (
    <button
      disabled={disabled}
      className={twMerge(
        `w-full py-3 md:py-5 px-2 rounded-lg text-white gradient-bg-animation font-bold md:text-xl ${
          disabled && "opacity-50"
        }  ${applyClasses}`
      )}
      onClick={onClick ? onClick : defaultHandleClick}
    >
      {hasEnrolled ? "You have enrolled!" : children}
    </button>
  );
};
export default EnrollButton;
