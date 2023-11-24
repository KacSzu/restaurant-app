function ButtonIcon({ children, variation, isOpen, onClick }) {
  const base =
    " focus:outline-none focus:ring rounded-full  disabled:cursor-not-allowed";
  const styles = {
    sidebarArrow:
      base +
      ` hover:bg-red-600 focus:ring-red-600 ring-offset-2 absolute -right-4  top-32  cursor-pointer  bg-red-500 p-2 duration-500 xl:text-2xl ${
        isOpen ? "rotate-180" : ""
      }`,
    sidebarOption: base + " text-2xl  p-2 focus:ring-neutral-300 xl:text-4xl",
  };

  return (
    <button onClick={onClick} className={styles[variation]}>
      {children}
    </button>
  );
}

export default ButtonIcon;
