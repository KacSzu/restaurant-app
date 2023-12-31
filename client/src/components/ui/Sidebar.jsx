import { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Logo from "./Logo";
import ButtonIcon from "./ButtonIcon";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg relative h-screen bg-neutral-200  pt-7  ${
        isOpen ? "w-64 xl:w-72" : "w-20 xl:w-24"
      }  duration-300 `}
    >
      <ButtonIcon
        isOpen={isOpen}
        variation="sidebarArrow"
        onClick={() => setIsOpen((o) => !o)}
      >
        <HiArrowRight />
      </ButtonIcon>
      <Logo />
      <SidebarOptions setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
}

export default Sidebar;
