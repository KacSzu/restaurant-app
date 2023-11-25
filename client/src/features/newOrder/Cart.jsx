import { useState } from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiTrash } from "react-icons/hi2";
import Button from "../../ui/Button";

const Cart = () => {
  const [cartItems] = useState([{ name: "Pizza", price: 15, quantity: 4 }]);

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className=" grid grid-rows-[0.05fr,0.75fr,0.05fr,0.15fr] divide-y divide-black pt-8">
      <h2 className="text-center uppercase">Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li className="pl-4" key={item.id}>
            {item.quantity} x {item.name} - ${item.price}
            <ButtonIcon>
              <HiTrash />
            </ButtonIcon>
          </li>
        ))}
      </ul>
      <p className="pl-4">Total: ${calculateTotal()}</p>

      <div className="space-x-4 pt-6 text-center xl:pt-10">
        <Button type="reset" variation="danger">
          cancel
        </Button>
        <Button variation="primary">Submit order</Button>
      </div>
    </div>
  );
};

export default Cart;
