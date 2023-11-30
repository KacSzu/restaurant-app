import { HiTrash } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";

function CartItem({ quantity, name, price }) {
  return (
    <li className="pl-4">
      {quantity} x {name} - ${price}
      <ButtonIcon>
        <HiTrash />
      </ButtonIcon>
    </li>
  );
}

export default CartItem;
