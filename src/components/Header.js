import { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { logout,auth } from "../utils/firebase";
import GradientButton from "./GradientButton";

const Header = () => {
    const {isAuthenticated,setIsAuthenticated,setIsAuthModalOpen}  = useAuthContext();
    const btnAction = isAuthenticated ? ()=>{logout();setIsAuthenticated(false)} : ()=>{setIsAuthModalOpen(true)}
    
  return (
    <>
      <header className="w-full absolute top-0 left-0 z-20">
        <div class="wrapper flex justify-end px-[5%] pt-5">
          <div class="btn-container max-w-[200px]">
          <button
            className="gradient-border border-2 text-primary-color rounded font-semibold px-6 py-3 text-xl"
            onClick={btnAction}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
