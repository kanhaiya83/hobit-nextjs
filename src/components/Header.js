import { useAuthContext } from "../context/authContext";
import { logout } from "../utils/firebase";

const Header = () => {
    const {isAuthenticated,loading,setIsAuthModalOpen}  = useAuthContext();
    const btnAction = loading ? null :(isAuthenticated ? ()=>{logout()} : ()=>{setIsAuthModalOpen(true)})
  return (
    <>
      <header className="w-full absolute top-0 left-0 z-20">
        <div className="wrapper flex justify-end px-[5%] pt-5">
          <div className="btn-container max-w-[200px]">
          <button
            className="rounded font-medium px-6 py-2 md:py-3 md:text-xl  w-full text-white gradient-btn"
            onClick={btnAction}
          >
            {loading?"Loading":(isAuthenticated ? "Logout" : "Login")}
          </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
