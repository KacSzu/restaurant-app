import Loader from "../ui/Loader";
import { useOrders } from "../../hooks/useOrders";
import Chart from "./Chart";
import StatsBoxes from "./StatsBoxes";

function DashboardLayout() {
  const { orders = [], isLoading, lastDays } = useOrders("done");
  if (isLoading) return <Loader />;
  return (
    <div>
      <StatsBoxes orders={orders} />
      <Chart lastDays={lastDays} orders={orders} />
    </div>
  );
}

export default DashboardLayout;
