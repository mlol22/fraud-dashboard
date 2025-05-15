import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Fraud Detection Dashboard</h1>
      <p>Welcome to your frontend React dashboard for fraud analytics.</p>

      <div style={{ marginTop: "2rem" }}>
        <h2>Overview</h2>
        <ul>
          <li>Suspicious Transactions: 12</li>
          <li>Total Volume: $24,000</li>
          <li>Alerts Raised: 5</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Charts & Activity</h2>
        <p>[Charts will go here — coming soon!]</p>
      </div>
    </div>
  );
}

export default App;

