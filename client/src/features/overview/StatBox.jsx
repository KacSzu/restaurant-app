function StatBox({ title, value }) {
  return (
    <div className=" flex w-36 flex-col flex-wrap items-center justify-between gap-4 rounded-md bg-white py-4 text-center shadow-md xl:w-48  xl:py-8 xl:text-xl">
      <span>{title}</span>
      <span> {value}</span>
    </div>
  );
}

export default StatBox;
