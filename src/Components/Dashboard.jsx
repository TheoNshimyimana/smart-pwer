import Card from "./Card";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="p-6 flex-1">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Power Used" value="120 kWh" />
        <Card title="Cost" value="$45.30" />
        <Card title="Peak Usage" value="4.2 kW" />
      </div>
      <div className="mt-6">
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
