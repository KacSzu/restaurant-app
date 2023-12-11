import Loader from "../../ui/Loader";
import { useOrders } from "../readyToServe/useOrders";
import DragItem from "./DragItem";

function DragColumn({ label, status }) {
  const { orders, isLoading } = useOrders(status);
  if (isLoading) return <Loader />;
  return (
    <div className=" mx-6 my-8 space-y-5 overflow-y-scroll rounded-lg bg-neutral-200  shadow-lg xl:mx-12 xl:my-16">
      <h3 className="mt-8  text-center font-semibold uppercase xl:text-lg">
        {label}
      </h3>
      <div className="flex flex-col  gap-5 px-4 ">
        {orders?.data?.map(({ _id, cart }) => (
          <DragItem key={_id} id={_id} cart={cart} />
        ))}
      </div>
    </div>
  );
}

export default DragColumn;
