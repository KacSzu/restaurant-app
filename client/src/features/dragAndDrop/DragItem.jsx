import { Draggable } from "react-beautiful-dnd";

function DragItem({ id, cart, index }) {
  return (
    <Draggable index={index} draggableId={`${id}`}>
      {(provided, snapshop) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`flex flex-col gap-5 rounded-lg px-5 py-4 shadow-md ${
            snapshop.isDragging ? "bg-neutral-400" : "bg-neutral-300"
          }`}
        >
          <span className=" font-medium xl:text-lg ">
            Order #{id.slice(0, 8)}
          </span>
          <div className="flex flex-col ">
            {cart.map(({ name, quantity }) => (
              <span className="xl:text-lg" key={name}>
                {quantity} x {name}
              </span>
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}

export default DragItem;
