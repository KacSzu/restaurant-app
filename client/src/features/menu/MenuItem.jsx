import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateCartQuantity from "../cart/updateCartQuantity";
function MenuItem({ id, name, ingredients, unitPrice, index }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <div className="grid grid-cols-[0.05fr,0.72fr,0.03fr,0.2fr] items-center justify-between pt-1">
      <p className=" mr-1 text-4xl font-light xl:text-5xl">{index + 1}</p>
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
        {isInCart ? (
          <UpdateCartQuantity id={id} />
        ) : (
          <Button onClick={handleAddToCart} variation="small">
            Add
          </Button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
