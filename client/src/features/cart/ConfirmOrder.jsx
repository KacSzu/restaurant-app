import { useDispatch, useSelector } from "react-redux";
import { getCart, getTableNumber, setTableNumber } from "./cartSlice";
import Button from "../../ui/Button";
import { useCreateOrder } from "./useCreateOrder";
import Error from "../../ui/Error";

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
      className="mx-auto mt-6 flex w-[350px] flex-col items-center  space-y-4 px-6"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className=" flex flex-col gap-4">
        <label className="text-center" htmlFor="tableNumber ">
          Please add table number
        </label>
        <input
          className="rounded-full  border border-neutral-500 px-2 py-1 pl-5 uppercase"
          placeholder="#table number"
          name="tableNumber"
          value={tableNumber}
          type="Number"
          id="tableNumber"
          onChange={(e) => {
            dispatch(setTableNumber(Number(e.target.value)));
          }}
        />

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
