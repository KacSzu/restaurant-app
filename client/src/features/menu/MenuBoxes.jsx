import { useSearchParams } from "react-router-dom";
import MenuBox from "./MenuBox";

const menuOptions = [
  {
    title: "Pizza",
    img: "pizza-160.jpg",
    category: "pizza",
  },
  {
    title: "Pasta",
    img: "pasta-160.jpg",
    category: "pasta",
  },
  {
    title: "Alcohol free drinks",
    img: "alcohol-free-160.jpg",
    category: "alcoholfree",
  },
  {
    title: "Wine's",
    img: "wines-160.jpg",
    category: "wines",
  },
];
function MenuBoxes() {
  const [searchParams, setSerachParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("category", value);
    setSerachParams(searchParams);
  }

  return (
    <div className="mt-16 grid w-full  grid-cols-2  justify-items-center gap-y-8  uppercase xl:mt-24 xl:gap-y-12">
      {menuOptions.map(({ title, img, category }) => (
        <MenuBox
          onClick={handleClick}
          title={title}
          img={img}
          category={category}
          key={title}
        />
      ))}
    </div>
  );
}
export default MenuBoxes;
