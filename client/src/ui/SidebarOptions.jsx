import {
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlinePencil,
  HiOutlinePresentationChartLine,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { SiCodechef } from "react-icons/si";
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
              icon: <SiCodechef />,
            },
            {
              title: "Edit menu",
              to: "menu",
              icon: <HiOutlineDocumentMagnifyingGlass />,
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
                icon: <HiOutlinePresentationChartLine />,
              },
              {
                title: "Edit menu",
                to: "menu",
                icon: <HiOutlineDocumentMagnifyingGlass />,
              },
              {
                title: "Add new user",
                to: "signup",
                icon: <HiOutlineUserPlus />,
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
