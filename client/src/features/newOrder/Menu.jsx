import { useSearchParams } from "react-router-dom";
import MenuBoxes from "./MenuBoxes";
import CategoryMenu from "./CategoryMenu";

function Menu() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || null;

  return (
    <div>
      <div className=" flex flex-col items-center gap-3 pt-8">
        <label htmlFor="searchInput">Type your query</label>
        <input
          id="searchInput"
          className="w-60 rounded-full border border-neutral-400 bg-white py-3 pl-4 text-xs duration-500 focus:outline-none focus:ring focus:ring-neutral-400   focus:ring-offset-2 xl:w-72 xl:py-4 xl:pl-6 xl:text-sm "
          placeholder="What are you looking for ?"
        />
      </div>
      {category ? <CategoryMenu /> : <MenuBoxes />}
    </div>
  );
}

export default Menu;
