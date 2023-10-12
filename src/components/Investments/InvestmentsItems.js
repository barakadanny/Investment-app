import React from 'react';

function InvestmentsItems(props) {
  const {
    currentSavings, yearlySavings, expectedInterest, duration,
  } = props;

  const calculateHandler = () => {
    const yearlyData = [];

    let currentSavingsFloat = parseFloat(currentSavings);
    const yearlySavingsFloat = parseFloat(yearlySavings);
    const expectedInterestFloat = parseFloat(expectedInterest) / 100;
    const durationInt = parseInt(duration, 10);

    for (let i = 0; i < durationInt; i += 1) {
      const yearlyInterest = currentSavingsFloat * expectedInterestFloat;
      currentSavingsFloat += yearlyInterest + yearlySavingsFloat;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toFixed(2),
        savingsEndOfYear: currentSavingsFloat.toFixed(2),
        yearlyContribution: yearlySavingsFloat.toFixed(2),
        totalInterest: (yearlyInterest * (i + 1)).toFixed(2),
        totalInvestedCapital: (yearlySavingsFloat * (i + 1)).toFixed(2),
      });
    }

    return yearlyData;
  };

  const yearlyData = calculateHandler();
  return (
    <>
      {yearlyData.map((data) => (
        <tr key={data.year}>
          <td>{data.year}</td>
          <td>
            $
            {data.savingsEndOfYear}
          </td>
          <td>
            $
            {data.yearlyInterest}
          </td>
          <td>
            $
            {data.totalInterest}
          </td>
          <td>
            $
            {data.totalInvestedCapital}
          </td>
        </tr>
      ))}
    </>
  );
}

export default InvestmentsItems;
