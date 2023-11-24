import StatBox from "./StatBox";
const statOptions = [
  {
    title: "Total orders",
    value: 0,
  },
  {
    title: "Orders being prepared",
    value: 0,
  },
  {
    title: "Orders waiting for being",
    value: 0,
  },
];
function Stats() {
  return (
    <div className=" mt-12 flex w-full justify-center gap-8  uppercase xl:gap-14">
      {statOptions.map(({ title, value, index }) => (
        <StatBox key={index} title={title} value={value} />
      ))}
    </div>
  );
}

export default Stats;
