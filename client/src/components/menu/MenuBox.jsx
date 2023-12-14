function MenuBox({ title, img, category, onClick }) {
  return (
    <div
      onClick={() => onClick(category)}
      className="relative w-52 cursor-pointer rounded-md bg-gray-600 text-center shadow-md hover:scale-105  hover:bg-gray-700 xl:w-72"
    >
      <img
        className="h-full w-full rounded-md  opacity-50"
        src={img}
        alt={`${title} photo`}
      />
      <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  text-neutral-50  xl:text-lg">
        {title}
      </span>
    </div>
  );
}

export default MenuBox;
