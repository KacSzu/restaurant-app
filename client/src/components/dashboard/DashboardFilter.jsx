import Filter from "../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "1", label: "Last day" },
        { value: "7", label: "Last 7 days" },
        { value: "30", label: "Last 30 days" },
        { value: "90", label: "Last 90 days" },
        { value: "365", label: "Last year" },
      ]}
    ></Filter>
  );
}

export default DashboardFilter;
