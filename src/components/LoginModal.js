
import Modal from "react-modal";
import { useAuthContext } from "../context/authContext";
import LoginComponent from "../utils/firebase";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    border: "none",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgb(52 52 52 / 75%)",
    zIndex: 1000,
  },
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");
const LoginModal = () => {
  const {
    isAuthModalOpen: isOpen,
    setIsAuthModalOpen: setIsOpen,
  } = useAuthContext();
  const closeModal=()=>{
    setIsOpen(false)
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <LoginComponent/>
    </Modal>
  );
};

export default LoginModal;
