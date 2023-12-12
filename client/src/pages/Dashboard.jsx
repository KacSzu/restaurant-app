import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <section className="pt-20 xl:pt-32">
      <DashboardFilter />
      <DashboardLayout />
    </section>
  );
}

export default Dashboard;
