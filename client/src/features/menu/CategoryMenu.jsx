import { useNavigate } from "react-router-dom";
import { useMenu } from "./useMenu";
import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";

function CategoryMenu() {
  const { menu, isLoading } = useMenu();
  const navigate = useNavigate();
  if (isLoading) return <Loader />;
  return (
    <div>
      <button disabled={isLoading} onClick={() => navigate(-1)}>
        go back
      </button>
      ;
      <div className="mx-auto  flex max-w-[550px] flex-col  gap-3 divide-y divide-neutral-800 rounded-lg bg-neutral-200 px-4 py-3">
        {menu?.data.map(({ _id, name, unitPrice, ingredients }, index) => (
          <MenuItem
            id={_id}
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
