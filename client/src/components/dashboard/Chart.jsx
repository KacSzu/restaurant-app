import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ orders, lastDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), lastDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalEarned: orders?.data
        ?.filter((order) => isSameDay(new Date(order.created_at), date))
        .reduce((sum, order) => {
          return (
            sum +
            order.cart.reduce((cartSum, item) => cartSum + item.totalPrice, 0)
          );
        }, 0),
      totalOrders: orders?.data?.filter((order) =>
        isSameDay(new Date(order.created_at), date),
      ).length,
    };
  });
  const colors = {
    totalOrders: { stroke: "#f87171", fill: "#f87171" },
    totalEarned: { stroke: "#4ade80", fill: "#4ade80" },
    text: "#262626",
    background: "#fff",
  };
  return (
    <div className="mx-8 mt-16">
      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalEarned"
            type="monotone"
            stroke={colors.totalEarned.stroke}
            fill={colors.totalEarned.fill}
            strokeWidth={2}
            name="Total earned"
            unit="$"
          />
          <Area
            dataKey="totalOrders"
            type="monotone"
            stroke={colors.totalOrders.stroke}
            fill={colors.totalOrders.fill}
            strokeWidth={2}
            name="Total orders"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
