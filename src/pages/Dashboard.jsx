import React from "react";
import OverviewChart from "../components/OverviewChart";
import DailyActivityChart from "../components/DailyActivityChart";
import Alerts from "../components/Alerts";
import TransactionSummary from "../components/TransactionSummary";
import ClientFeedback from "../components/ClientFeedback";

function Dashboard() {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>Fraud Detection Dashboard</h1>
      <OverviewChart />
      <DailyActivityChart />
      <Alerts />
      <TransactionSummary />
      <ClientFeedback />
    </div>
  );
}

export default Dashboard;

