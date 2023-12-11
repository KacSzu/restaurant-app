import DragColumn from "./DragColumn";

function DragAndDrop() {
  const data = [
    { label: "Waiting", status: "waiting" },
    { label: "Ready", status: "ready" },
  ];
  return (
    <div className="grid h-screen grid-cols-2 gap-3   ">
      {data.map(({ label, status }) => (
        <DragColumn key={label} label={label} status={status} />
      ))}
    </div>
  );
}

export default DragAndDrop;
