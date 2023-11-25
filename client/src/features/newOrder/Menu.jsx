import MenuBox from "./MenuBox";

function Menu() {
  return (
    <div>
      <div className=" flex flex-col items-center gap-3 pt-8">
        <label>Type your query</label>
        <input
          className="w-60 rounded-full border border-neutral-400 bg-white py-3 pl-4 text-xs duration-500 focus:outline-none focus:ring focus:ring-neutral-400   focus:ring-offset-2 xl:w-72 xl:py-4 xl:pl-6 xl:text-sm "
          placeholder="What are you looking for ?"
        />
      </div>
      <MenuBox />
    </div>
  );
}

export default Menu;
