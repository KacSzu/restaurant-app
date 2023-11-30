import Cart from "../features/cart/Cart";
import Menu from "../features/menu/Menu";

function NewOrder() {
  return (
    <div className="grid h-screen grid-cols-[2fr,1fr] divide-x divide-black  ">
      <Menu />
      <Cart />
    </div>
  );
}

export default NewOrder;
