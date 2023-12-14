import Loader from "../ui/Loader";
import { useOrders } from "../../hooks/useOrders";
import DragItem from "./DragItem";
import { Droppable } from "react-beautiful-dnd";
import Error from "../ui/Error";
function DragColumn({ label, status, id }) {
  const { orders = [], isLoading } = useOrders(status);
  if (isLoading) return <Loader />;
  return (
    <div className=" mx-6 my-8 space-y-5 overflow-y-scroll rounded-lg bg-neutral-200  shadow-lg xl:mx-12 xl:my-16">
      <h3 className="mt-8  text-center font-semibold uppercase xl:text-lg">
        {label}
      </h3>
      {orders.length === 0 && <Error>Any orders waiting for you</Error>}
      <div className="flex flex-col  gap-5 px-4 ">
        <Droppable droppableId={id}>
          {(provided) => (
            <div
              className="flex h-screen w-full flex-col gap-5 px-4 "
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {orders?.data?.map(({ _id, cart }, index) => (
                <DragItem index={index} key={_id} id={_id} cart={cart} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
}

export default DragColumn;
