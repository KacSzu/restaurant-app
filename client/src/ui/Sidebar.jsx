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
        isOpen ? "w-72" : "w-20"
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
      <SidebarOptions isOpen={isOpen} />
    </div>
  );
}

export default Sidebar;
