import StatsBox from "./StatsBox";
import { HiOutlineBanknotes, HiOutlineChartBarSquare } from "react-icons/hi2";
function StatsBoxes() {
  const statsOptions = [
    {
      label: "Total orders",
      value: "ab2c5235123521",
      icon: <HiOutlineChartBarSquare />,
    },
    { label: "Total earned", value: "abc", icon: <HiOutlineBanknotes /> },
  ];
  return (
    <div className="mt-12 grid grid-cols-2 justify-around justify-items-center gap-8 ">
      {statsOptions.map(({ label, value, icon }) => (
        <StatsBox key={label} label={label} value={value} icon={icon} />
      ))}
    </div>
  );
}

export default StatsBoxes;
