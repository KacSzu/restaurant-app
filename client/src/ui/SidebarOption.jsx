import { Link } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

function SidebarOption({ to, icon, title, isOpen }) {
  return (
    <li>
      <Link
        to={to}
        className=" flex gap-3 rounded-full  px-4 py-2 duration-500 hover:bg-neutral-300 focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed "
      >
        <ButtonIcon variation="sidebarOption">{icon}</ButtonIcon>

        <span
          className={`${
            !isOpen && " hidden "
          } flex items-center text-lg font-medium uppercase xl:text-xl`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
}

export default SidebarOption;
