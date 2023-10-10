import React from "react";
import InvestmentForm from "./InvestmentForm";

function NewInvestment(props) {
  const saveInvestmentDataHandler = (enteredInvestmentData) => {
    const investmentData = {
      ...enteredInvestmentData,
      id: Math.random().toString(),
    };
    console.log(investmentData);
  };

  return (
    <div>
      <InvestmentForm onSaveExpenseData={saveInvestmentDataHandler} />
    </div>
  );
}

export default NewInvestment;
