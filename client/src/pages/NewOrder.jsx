import Cart from "../features/cart/Cart";
import MenuLayout from "../features/menu/MenuLayout";

function NewOrder() {
  return (
    <div className="grid h-screen grid-cols-[2fr,1fr] divide-x divide-neutral-800  ">
      <MenuLayout />
      <Cart />
    </div>
  );
}

export default NewOrder;
