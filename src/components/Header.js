import { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { logout,auth } from "../utils/firebase";
import GradientButton from "./GradientButton";

const Header = () => {
    const {isAuthenticated,loading,setIsAuthModalOpen}  = useAuthContext();
    const btnAction = loading ? null :(isAuthenticated ? ()=>{logout()} : ()=>{setIsAuthModalOpen(true)})
  return (
    <>
      <header className="w-full absolute top-0 left-0 z-20">
        <div className="wrapper flex justify-end px-[5%] pt-5">
          <div className="btn-container max-w-[200px]">
          <GradientButton
            // className="gradient-border border-2 text-primary-color rounded font-semibold px-6 py-3 text-xl"
            applyClasses={"rounded font-medium px-6 py-2 md:py-3 text-xl"}
            onClick={btnAction}
          >
            {loading?"Loading":(isAuthenticated ? "Logout" : "Login")}
          </GradientButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
