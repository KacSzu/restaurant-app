import { useNavigate } from "react-router-dom";
import { useMenu } from "./useMenu";
import MenuItem from "./MenuItem";
import Loader from "../ui/Loader";

function CategoryMenu() {
  const { menu, isLoading } = useMenu();
  const navigate = useNavigate();
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="mx-16  flex justify-end gap-3 px-2 py-1 text-2xl text-neutral-800">
        &larr;
        <button
          className="text-base"
          disabled={isLoading}
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
      <div className="  mx-12 flex flex-col gap-3 divide-y divide-neutral-800 rounded-lg bg-neutral-200 px-4 py-3 ">
        {menu?.data?.map(
          ({ _id, name, unitPrice, ingredients, soldOut }, index) => (
            <MenuItem
              soldOut={soldOut}
              id={_id}
              index={index}
              key={_id}
              name={name}
              unitPrice={unitPrice}
              ingredients={ingredients}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default CategoryMenu;
