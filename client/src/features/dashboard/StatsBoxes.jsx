import StatsBox from "./StatsBox";
import { HiOutlineBanknotes, HiOutlineChartBarSquare } from "react-icons/hi2";
function StatsBoxes({ orders }) {
  console.log(orders);
  const totalOrders = orders?.data?.length;
  const totalEarned = orders?.data?.reduce((sum, order) => {
    return (
      sum + order.cart.reduce((cartSum, item) => cartSum + item.totalPrice, 0)
    );
  }, 0);

  const statsOptions = [
    {
      label: "Total orders",
      value: totalOrders,
      icon: <HiOutlineChartBarSquare />,
    },
    { label: "Total earned", value: totalEarned, icon: <HiOutlineBanknotes /> },
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
