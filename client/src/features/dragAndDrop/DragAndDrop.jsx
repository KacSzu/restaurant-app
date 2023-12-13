import Loader from "../../ui/Loader";
import { useUpdateOrderStatus } from "../readyToServe/useUpdateOrderStatus";
import DragColumn from "./DragColumn";
import { DragDropContext } from "react-beautiful-dnd";
function DragAndDrop() {
  const { updateOrder, isUpdating } = useUpdateOrderStatus();
  const data = [
    { label: "Waiting", status: "waiting" },
    { label: "Ready", status: "ready" },
  ];
  function handleDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination || source?.droppableId === destination?.droppableId)
      return;
    console.log(source, destination, draggableId);
    console.log(draggableId, destination.droppableId);
    updateOrder({ id: draggableId, newStatus: destination.droppableId });
  }
  if (isUpdating) return <Loader />;
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid h-screen grid-cols-2 gap-3   ">
        {data.map(({ label, status }) => (
          <DragColumn key={label} label={label} status={status} id={status} />
        ))}
      </div>
    </DragDropContext>
  );
}

export default DragAndDrop;
