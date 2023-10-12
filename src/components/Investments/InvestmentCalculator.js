import React, { useState } from 'react';
import logo from '../../assets/investment-calculator-logo.png';
import NewInvestment from '../NewInvestment/NewInvestment';
import InvestmentsItems from './InvestmentsItems';

function InvestmentCalculator() {
  const [investmentData, setInvestmentData] = useState([]);

  const addInvestmentDataHandler = (newInvestmentData) => {
    setInvestmentData((prevInvestmentData) => [
      ...prevInvestmentData,
      newInvestmentData,
    ]);
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <NewInvestment onSaveInvestment={addInvestmentDataHandler} />

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
        <tbody>
          {investmentData.length === 0 ? (
            <tr>
              <td>No data available!!</td>
            </tr>
          ) : (
            investmentData.map((item) => (
              <InvestmentsItems
                key={item.id}
                currentSavings={item.currentSavings}
                yearlySavings={item.yearlySavings}
                expectedInterest={item.expectedInterest}
                duration={item.duration}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InvestmentCalculator;
