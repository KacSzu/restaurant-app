import { HiOutlineTrash } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ id, quantity, name, totalPrice }) {
  const dispatch = useDispatch();
  function handleDeleteFromCart(id) {
    dispatch(deleteItem(id));
  }
  return (
    <li className=" mx-6 flex  justify-between py-4 xl:text-lg">
      <span>
        {quantity} x {name} - {formatCurrency(totalPrice)}
      </span>
      <ButtonIcon variation="cart" onClick={() => handleDeleteFromCart(id)}>
        <HiOutlineTrash />
      </ButtonIcon>
    </li>
  );
}

export default CartItem;
