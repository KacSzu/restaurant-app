import {
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlinePencil,
} from "react-icons/hi2";
import SidebarOption from "./SidebarOption";

function SidebarOptions({ isOpen, setIsOpen }) {
  const menus = [
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
      to: "settings",
      icon: <HiOutlineCog6Tooth />,
    },
  ];

  return (
    <ul
      onClick={() => setIsOpen(false)}
      className="flex flex-col items-center gap-3 pt-24  xl:gap-6  xl:py-36   "
    >
      {menus.map(({ title, to, icon }) => (
        <SidebarOption
          key={title}
          title={title}
          to={to}
          icon={icon}
          isOpen={isOpen}
        />
      ))}
    </ul>
  );
}

export default SidebarOptions;
