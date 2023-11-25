const menuOptions = [
  {
    title: "Pizza",
    img: "pizza-160.jpg",
  },
  {
    title: "Pasta",
    img: "pasta-160.jpg",
  },
  {
    title: "Alcohol free drinks",
    img: "alcohol-free-160.jpg",
  },
  {
    title: "Wine's",
    img: "wines-160.jpg",
  },
];

function MenuBox() {
  return (
    <div className="mt-16 grid  w-full  grid-cols-2 justify-items-center gap-y-8 uppercase xl:mt-24 xl:gap-y-12">
      {menuOptions.map(({ title, img }, index) => (
        <div
          className="relative w-52 cursor-pointer rounded-md bg-gray-600 text-center hover:scale-105  hover:bg-gray-700 xl:w-60"
          key={index}
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
      ))}
    </div>
  );
}
export default MenuBox;
