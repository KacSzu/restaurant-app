import { useDispatch, useSelector } from "react-redux";
import { getCart, getTableNumber, setTableNumber } from "./cartSlice";
import Button from "../ui/Button";
import { useCreateOrder } from "./useCreateOrder";
import Error from "../ui/Error";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

function ConfirmOrder({ onCloseModal }) {
  const { createOrder, isPending } = useCreateOrder();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const emptyCart = !cart.length;
  const tableNumber = useSelector(getTableNumber);
  function handleSubmit(e) {
    e.preventDefault();
    if (emptyCart || tableNumber <= 0) return;
    createOrder();
    dispatch(setTableNumber(1));
    onCloseModal?.();
  }
  return (
    <form
      className=" mx-auto my-8 flex w-[450px] flex-col items-center  space-y-4 px-6"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className=" flex flex-col gap-4">
        <FormRow label="Please add table number">
          <Input
            placeholder="#table number"
            name="tableNumber"
            value={tableNumber}
            type="Number"
            id="tableNumber"
            onChange={(e) => {
              dispatch(setTableNumber(Number(e.target.value)));
            }}
          />
        </FormRow>

        {tableNumber <= 0 && (
          <Error>Table number can not be lower than 1</Error>
        )}
      </div>
      <div className="space-x-4 py-4 text-center">
        <Button
          disabled={isPending}
          type="reset"
          onClick={() => {
            dispatch(setTableNumber(1));
            onCloseModal?.();
          }}
          variation="danger"
        >
          Cancel
        </Button>
        <Button disabled={isPending || !tableNumber} variation="primary">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ConfirmOrder;
