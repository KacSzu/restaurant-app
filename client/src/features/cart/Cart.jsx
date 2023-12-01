import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ConfirmOrder from "./confirmOrder";
import Modal from "../../ui/Modal";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const emptyCart = !cart.length;
  const totalPrice = useSelector(getTotalCartPrice);

  return (
    <div className=" grid grid-rows-[0.05fr,0.75fr,0.05fr,0.15fr] divide-y divide-black pt-8">
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
        <span className="ml-4 ">
          Total price:{" "}
          <span className="font-semibold">{formatCurrency(totalPrice)}</span>
        </span>
      </div>
      <div className="space-x-4 pt-6 text-center xl:pt-10">
        <Button
          type="reset"
          disabled={emptyCart}
          variation="danger"
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </Button>
        <Modal>
          <Modal.Open opens="confirmOrder">
            <Button disabled={emptyCart} variation="primary">
              Create
            </Button>
          </Modal.Open>
          <Modal.Window name="confirmOrder">
            <ConfirmOrder />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default Cart;
