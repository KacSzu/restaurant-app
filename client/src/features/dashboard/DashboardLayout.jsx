import Loader from "../../ui/Loader";
import { useOrders } from "../readyToServe/useOrders";
import Chart from "./Chart";
import StatsBoxes from "./StatsBoxes";

function DashboardLayout() {
  const { orders = [], isLoading, lastDays } = useOrders("done");
  console.log(orders);
  console.log(orders);
  if (isLoading) return <Loader />;
  return (
    <div>
      <StatsBoxes orders={orders} />
      <Chart lastDays={lastDays} orders={orders} />
    </div>
  );
}

export default DashboardLayout;
