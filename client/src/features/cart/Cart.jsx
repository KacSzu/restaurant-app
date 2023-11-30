import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
import { formatCurrency } from "../../utils/helpers";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrder } from "./useCreateOrder";
const Cart = () => {
  const dispatch = useDispatch();
  const { createOrder, isCreating } = useCreateOrder();
  const cart = useSelector(getCart);
  const emptyCart = !cart.length;
  const totalPrice = useSelector(getTotalCartPrice);
  function handleCreateOrder(e) {
    e.preventDefault();
    if (emptyCart) return;
    createOrder();
  }
  if (isCreating) return <Loader />;
  return (
    <form
      method="POST"
      onSubmit={handleCreateOrder}
      className=" grid grid-rows-[0.05fr,0.75fr,0.05fr,0.15fr] divide-y divide-black pt-8"
    >
      <h2 className="text-center uppercase">Your Cart</h2>
      {emptyCart ? (
        <div>
          <EmptyCart />
        </div>
      ) : (
        <ul>
          {cart.map(({ id, quantity, name, totalPrice }, index) => (
            <CartItem
              id={id}
              quantity={quantity}
              name={name}
              totalPrice={totalPrice}
              key={index}
            />
          ))}
        </ul>
      )}
      <div className=" flex items-center">
        <span className="ml-4">Total price: {formatCurrency(totalPrice)}</span>
      </div>
      <div className="space-x-4 pt-6 text-center xl:pt-10">
        <Button
          type="reset"
          disabled={isCreating || emptyCart}
          variation="danger"
          onClick={() => dispatch(clearCart())}
        >
          Cancel
        </Button>
        <Button disabled={isCreating || emptyCart} variation="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Cart;
