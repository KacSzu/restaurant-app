import StatBox from "./StatBox";
const statOptions = [
  {
    title: "Total orders",
    value: 312,
  },
  {
    title: "Orders being prepared",
    value: 21,
  },
  {
    title: "Orders waiting for being",
    value: 12,
  },
];
function Stats() {
  return (
    <div className=" mt-12 flex w-full justify-center gap-8  uppercase xl:gap-14">
      {statOptions.map(({ title, value }) => (
        <StatBox key={title} title={title} value={value} />
      ))}
    </div>
  );
}

export default Stats;
