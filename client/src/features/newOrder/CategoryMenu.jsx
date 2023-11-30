import { useNavigate } from "react-router-dom";
import { useMenu } from "./useMenu";
import MenuItem from "./MenuItem";

function CategoryMenu() {
  const { menu, isLoading } = useMenu();
  console.log(menu, isLoading);
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>;
      <div className="mx-auto mt-10 flex max-w-[550px] flex-col  gap-3 divide-y divide-black rounded-lg bg-neutral-200 px-4 py-3">
        {menu?.data.map(({ name, unitPrice, ingredients }, index) => (
          <MenuItem
            index={index}
            key={name}
            name={name}
            unitPrice={unitPrice}
            ingredients={ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
