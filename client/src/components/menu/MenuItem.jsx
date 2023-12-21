import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";
import { getCurrentUser } from "../authentication/userSlice";
import { useUpdateMenuSoldOut } from "./useUpdateMenuSoldOut";
import Loader from "../ui/Loader";
import { useDeluteMenuItem } from "./useDeleteMenuItem";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";
function MenuItem({ id, name, ingredients, unitPrice, index, soldOut }) {
  const user = useSelector(getCurrentUser);
  const [searchParams] = useSearchParams();

  const { deleteMenuItem, isDeleting } = useDeluteMenuItem();
  const { updateMenuItem, isPending } = useUpdateMenuSoldOut();
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const currentPage = searchParams.get("page") ? +searchParams.get("page") : 1;
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const isWorking = isDeleting || isPending;

  function handleAddToCart() {
    if (soldOut) return;
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  function handleSetSoldOut() {
    const newSoldOut = !soldOut;
    updateMenuItem({ id, newSoldOut });
  }
  function handleDeleteItem(id) {
    deleteMenuItem(id);
  }
  if (isWorking) return <Loader />;
  return (
    <div className=" grid grid-cols-[0.08fr,0.65fr,0.05fr,0.22fr] items-center justify-between pt-1 xl:grid-cols-[0.09fr,0.60fr,0.01fr,0.20fr]">
      <p className=" mr-1 text-4xl font-light xl:text-5xl">
        {startIndex + index + 1}
      </p>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold xl:text-lg ">{name}</h3>
        {ingredients && (
          <p className="text-xs uppercase xl:text-sm">
            {ingredients.join(", ")}
          </p>
        )}
      </div>
      <p className="text-sm font-semibold xl:text-base">
        {formatCurrency(unitPrice)}
      </p>
      <div className="flex items-center justify-center">
        {user?.role === "waiter" ? (
          isInCart ? (
            <UpdateCartQuantity id={id} />
          ) : (
            <Button
              onClick={handleAddToCart}
              disabled={soldOut}
              variation={soldOut ? "soldout" : "small"}
            >
              {soldOut ? "Sold" : "Add"}
            </Button>
          )
        ) : null}
        {user?.role === "kitchen" && (
          <Button
            onClick={handleSetSoldOut}
            disabled={isWorking}
            variation={soldOut ? "primary" : "danger"}
          >
            {soldOut ? "Active" : "Sold out"}
          </Button>
        )}
        {user?.role === "admin" && (
          <Button
            onClick={() => handleDeleteItem(id)}
            disabled={true}
            variation={"danger"}
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
