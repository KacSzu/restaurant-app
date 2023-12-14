import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { getCurrentUser } from "../authentication/userSlice";
const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = setOpenName;
  const close = () => setOpenName("");
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const user = useSelector(getCurrentUser);
  const cart = useSelector(getCart);
  const emptyCart = !cart.length;
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      {
        user?.role === "admin"
          ? open(opensWindowName)
          : emptyCart
            ? null
            : open(opensWindowName);
      }
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  return createPortal(
    <div className=" fixed left-0 top-0 z-50 h-screen w-full bg-white bg-opacity-10  backdrop-blur-sm transition-all duration-500">
      <div className="fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 transform rounded-[30px] bg-white shadow-lg ring-2 ring-neutral-800 ring-offset-2 ring-offset-white transition-all duration-500">
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
