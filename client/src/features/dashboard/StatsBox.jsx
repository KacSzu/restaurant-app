import { formatCurrency } from "../../utils/helpers";

function StatsBox({ label, value, icon }) {
  return (
    <div className=" grid w-[50%] grid-cols-[2fr,1fr]  flex-col rounded-lg bg-white p-4  shadow-md">
      <span className="flex items-center font-semibold uppercase">{label}</span>
      <div className="rounded-full bg-green-200 p-4">
        <span className="text-4xl">{icon}</span>
      </div>
      <span className="row-span-2 text-lg font-semibold">
        {label === "Total earned" ? formatCurrency(value) : value}
      </span>
    </div>
  );
}

export default StatsBox;
