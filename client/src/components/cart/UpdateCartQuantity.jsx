import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";

function UpdateCartQuantity({ id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <ButtonIcon
        onClick={() => dispatch(increaseQuantity(id))}
        variation="small"
      >
        <HiOutlinePlusSmall />
      </ButtonIcon>
      <ButtonIcon
        onClick={() => dispatch(decreaseQuantity(id))}
        variation="small"
      >
        <HiOutlineMinusSmall />
      </ButtonIcon>
    </div>
  );
}

export default UpdateCartQuantity;
