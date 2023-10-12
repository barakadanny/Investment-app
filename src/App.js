import React, { useState } from 'react';
import InvestmentCalculator from './components/Investments/InvestmentCalculator';

const DUMMY_INVESTMENTS = [
  {
    id: 'e1',
    currentSavings: 654,
    yearlySavings: 100,
    expectedInterest: 5,
    duration: 3,
  },
];

function App() {
  const [investments, setInvestments] = useState(DUMMY_INVESTMENTS);

  const addInvestmentHandler = (investment) => {
    setInvestments((prevInvestments) => [investment, ...prevInvestments]);
    // console.log(investment);
  };
  return (
    <div>
      <InvestmentCalculator
        items={investments}
        addInvestment={addInvestmentHandler}
      />
    </div>
  );
}

export default App;
