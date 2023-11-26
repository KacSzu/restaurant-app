import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlinePencil,
} from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { Link } from "react-router-dom";
function SidebarOptions({ isOpen }) {
  const menus = [
    {
      title: "Overview",
      to: "overview",
      icon: <HiOutlineChartBar />,
    },
    {
      title: "New Order",
      to: "newOrder",
      icon: <HiOutlinePencil />,
    },
    {
      title: "Ready to serve",
      to: "ready",
      icon: <HiOutlineClock />,
    },
    {
      title: "Settings",
      to: "overview",
      icon: <HiOutlineCog6Tooth />,
    },
  ];
  return (
    <ul className="flex flex-col items-center gap-3 pt-16 xl:gap-6 xl:py-24    ">
      {menus.map((menu, index) => (
        <li key={index}>
          <Link
            to={menu.to}
            className=" flex gap-3 rounded-full  px-4 py-2 duration-500 hover:bg-neutral-300 focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed "
          >
            <ButtonIcon variation="sidebarOption">{menu.icon}</ButtonIcon>
            <span
              className={`${
                !isOpen && " hidden "
              } flex items-center text-lg font-medium uppercase xl:text-xl`}
            >
              {menu.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SidebarOptions;
