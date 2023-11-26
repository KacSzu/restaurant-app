import { Link } from "react-router-dom";

const base =
  " focus:outline-none focus:ring rounded-full ring-offset-2 disabled:cursor-not-allowed duration-500";
const styles = {
  primary:
    base +
    " uppercase xl:text-base  bg-emerald-300 py-2 px-3 focus:ring-emerald-400 hover:bg-emerald-400 xl:p-5 border border-emerald-700 ",
  danger:
    base +
    "  uppercase xl:text-base bg-red-300 py-2 px-3 border border-red-700 focus:ring-red-400 hover:bg-red-400 xl:p-5",
};
function Button({ children, to, variation }) {
  if (to)
    return (
      <Link to={to} className={styles[variation]}>
        {children}
      </Link>
    );
  return <button className={styles[variation]}>{children}</button>;
}

export default Button;
