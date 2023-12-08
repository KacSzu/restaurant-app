import StatBox from "./StatBox";
const statOptions = [
  {
    title: "Orders waiting for being",
    value: 12,
  },

  {
    title: "Orders being prepared",
    value: 21,
  },
];
function Stats() {
  return (
    <div className=" mx-auto mt-12 grid grid-cols-2 justify-items-center uppercase">
      {statOptions.map(({ title, value }) => (
        <StatBox key={title} title={title} value={value} />
      ))}
    </div>
  );
}

export default Stats;
