import Cart from "../features/newOrder/Cart";
import Menu from "../features/newOrder/Menu";

function NewOrder() {
  return (
    <div className="grid h-screen grid-cols-[2fr,1fr] divide-x divide-black  ">
      <Menu />
      <Cart />
    </div>
  );
}

export default NewOrder;
