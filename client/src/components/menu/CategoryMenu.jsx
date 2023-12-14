import { useNavigate } from "react-router-dom";
import { useMenu } from "./useMenu";
import MenuItem from "./MenuItem";
import Loader from "../ui/Loader";
import Pagination from "../ui/Pagination";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../authentication/userSlice";

function CategoryMenu() {
  const user = useSelector(getCurrentUser);
  console.log(user);
  const { menu, isLoading } = useMenu();
  console.log(menu);
  const navigate = useNavigate();
  if (isLoading) return <Loader />;
  return (
    <div className="mx-12">
      <div className="  flex justify-end gap-3 px-2 py-1 text-2xl text-neutral-800">
        &larr;
        <button
          className="text-base"
          disabled={isLoading}
          onClick={
            user?.role !== "waiter"
              ? () => navigate("/menu")
              : () => navigate("/newOrder")
          }
        >
          Go back
        </button>
      </div>
      <div className="flex flex-col gap-3 divide-y divide-neutral-800 rounded-lg bg-neutral-200 px-4 py-3 ">
        {menu?.data?.paginatedData?.map(
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
      <Pagination count={menu?.data?.count} />
    </div>
  );
}

export default CategoryMenu;
