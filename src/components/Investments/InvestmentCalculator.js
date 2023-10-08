import React from "react";
import logo from "../../assets/investment-calculator-logo.png";
import NewInvestment from "./../NewInvestment/NewInvestment";
import InvestmentsItems from "./InvestmentsItems";

function InvestmentCalculator() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <NewInvestment />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <InvestmentsItems />
      </table>
    </div>
  );
}

export default InvestmentCalculator;
