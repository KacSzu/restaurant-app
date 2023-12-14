import { formatCurrency } from "../../utils/helpers";

function StatsBox({ label, value, icon }) {
  return (
    <div className=" grid w-[50%] grid-cols-[2fr,1fr]  flex-col rounded-lg bg-white p-4  shadow-md">
      <h5 className="flex items-center font-semibold uppercase xl:text-lg">
        {label}
      </h5>
      <div className="flex items-center justify-center rounded-full bg-emerald-200 p-4">
        <span className="text-4xl xl:text-5xl">{icon}</span>
      </div>
      <span className="row-span-2 text-lg font-semibold xl:text-2xl">
        {label === "Total earned" ? formatCurrency(value) : value}
      </span>
    </div>
  );
}

export default StatsBox;
