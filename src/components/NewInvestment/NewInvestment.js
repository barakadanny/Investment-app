import React from 'react';
import InvestmentForm from './InvestmentForm';

function NewInvestment(props) {
  const saveInvestmentDataHandler = (enteredInvestmentData) => {
    const investmentData = {
      ...enteredInvestmentData,
      id: Math.random().toString(),
    };
    /* eslint-disable-next-line */
    props.onSaveInvestment(investmentData);
  };

  return (
    <div>
      <InvestmentForm onSaveInvestmentData={saveInvestmentDataHandler} />
    </div>
  );
}

export default NewInvestment;
