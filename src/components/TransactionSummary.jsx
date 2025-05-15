import React from "react";

function TransactionSummary() {
  return (
    <div>
      <h2>Transaction Summary</h2>
      <p>Total Transactions Today: <strong>534</strong></p>
      <p>Suspicious: <strong>12</strong></p>
      <p>Confirmed Fraud: <strong>3</strong></p>
    </div>
  );
}

export default TransactionSummary;
