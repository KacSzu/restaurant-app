function DragItem({ id, cart }) {
  console.log(id, cart);
  return (
    <div className=" rounded-md border border-neutral-800 p-3 shadow-md">
      <span className=" font-medium xl:text-lg ">Order #{id.slice(0, 8)}</span>
      <div className="flex flex-col">
        {cart.map(({ name, quantity }) => (
          <span className="xl:text-lg" key={name}>
            {quantity} x {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DragItem;
