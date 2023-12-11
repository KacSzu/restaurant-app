import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlinePencil,
} from "react-icons/hi2";
import { LuChefHat, LuClipboardEdit } from "react-icons/lu";
import SidebarOption from "./SidebarOption";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../features/authentication/userSlice";

function SidebarOptions({ isOpen, setIsOpen }) {
  const user = useSelector(getCurrentUser);
  const menus =
    user?.role === "waiter"
      ? [
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
        ]
      : user?.role === "kitchen"
        ? [
            {
              title: "Kitchen",
              to: "kitchen",
              icon: <LuChefHat />,
            },
            {
              title: "Edit menu",
              to: "menu",
              icon: <LuClipboardEdit />,
            },
            {
              title: "Settings",
              to: "settings",
              icon: <HiOutlineCog6Tooth />,
            },
          ]
        : user?.role === "admin"
          ? [
              {
                title: "Dashboard",
                to: "dashboard",
                icon: <HiOutlineChartBar />,
              },
              {
                title: "Edit menu",
                to: "menu",
                icon: <LuClipboardEdit />,
              },
              {
                title: "Settings",
                to: "settings",
                icon: <HiOutlineCog6Tooth />,
              },
            ]
          : null;

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
