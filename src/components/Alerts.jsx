import React from "react";

function Alerts() {
  const alerts = [
    "⚠️ High transaction from Nigeria",
    "⚠️ Multiple failed login attempts",
    "⚠️ Suspicious IP detected",
  ];

  return (
    <div>
      <h2>Real-Time Alerts</h2>
      <ul>
        {alerts.map((alert, i) => (
          <li key={i}>{alert}</li>
        ))}
      </ul>
    </div>
  );
}

export default Alerts;
