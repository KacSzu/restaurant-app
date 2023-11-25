import { Link } from "react-router-dom";

const base =
  " focus:outline-none focus:ring rounded-full ring-offset-2 disabled:cursor-not-allowed duration-500";
const styles = {
  primary:
    base +
    " uppercase xl:text-base  bg-emerald-200 p-3 focus:ring-emerald-300 hover:bg-emerald-300 xl:p-5 ",
  danger:
    base +
    "  uppercase xl:text-base bg-red-200 p-3 focus:ring-red-300 hover:bg-red-300 xl:p-5",
};
function Button({ children, to, variation }) {
  if (to) return <Link to={to} />;
  return <button className={styles[variation]}>{children}</button>;
}

export default Button;
