import DashboardFilter from "../components/dashboard/DashboardFilter";
import DashboardLayout from "../components/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <section className="pt-20 xl:pt-32">
      <DashboardFilter />
      <DashboardLayout />
    </section>
  );
}

export default Dashboard;
