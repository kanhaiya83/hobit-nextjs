import { useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { logout,auth } from "../utils/firebase";

const Header = () => {
    const {isAuthenticated,setIsAuthenticated,setIsAuthModalOpen}  = useAuthContext();
    const btnAction = isAuthenticated ? ()=>{logout();setIsAuthenticated(false)} : ()=>{setIsAuthModalOpen(true)}
    
  return (
    <>
      <header className="w-full absolute top-0 left-0 z-20">
        <div class="wrapper flex justify-end">
          <button
            className="grad-btn px-6 py-3 text-xl rounded mt-4 mr-4"
            onClick={btnAction}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
