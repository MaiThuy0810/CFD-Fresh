import ReactDOM from "react-dom";

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(children, document.body);
};
export default Modal;
