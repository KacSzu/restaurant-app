import { Link } from "react-router-dom";

function Button({ children, to, variation, onClick, disabled, active }) {
  const base = ` focus:outline-none uppercase border focus:ring rounded-full font-semibold ring-offset-2 ${
    disabled && "cursor-not-allowed"
  } duration-500`;
  const styles = {
    primary:
      base +
      "  xl:text-lg  bg-emerald-300 py-2 px-3 focus:ring-emerald-400 hover:bg-emerald-400   border-emerald-700  ",
    danger:
      base +
      "   xl:text-lg bg-red-300 py-2 px-3  border-red-700 focus:ring-red-400 hover:bg-red-400 ",
    small:
      base +
      "  font-semibold text-xs px-3 py-2 bg-emerald-300 focus:ring-emerald-400 hover:bg-emerald-400  border-emerald-700 xl:px-4 xl:text-base",
    logout:
      base +
      " text-xl px-4 py-2 bg-red-300 py-2 px-3  border-red-700 focus:ring-red-400 hover:bg-red-400 xl:py-3 xl:px-4 uppercase  ",
    soldout:
      base +
      "   text-xs px-3 py-2  bg-neutral-300 focus:ring-neutral-400 hover:bg-neutral-400  border-neutral-700 xl:px-4 xl:text-base",
    filter:
      base +
      `  text-xs px-3 py-2  xl:px-4 xl:text-base ${
        active
          ? "bg-emerald-200 focus:ring-emerald-400 hover:bg-emerald-400 border-emerald-700"
          : "bg-neutral-200 focus:ring-neutral-400 hover:bg-neutral-400 border-neutral-700"
      }   `,
    pagination:
      base +
      "  xl:text-lg  bg-neutral-300 py-2 px-3 focus:ring-neutral-400 hover:bg-neutral-400   border-neutral-700  ",
  };
  if (to)
    return (
      <Link to={to} className={styles[variation]}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={styles[variation]}>
      {children}
    </button>
  );
}

export default Button;
