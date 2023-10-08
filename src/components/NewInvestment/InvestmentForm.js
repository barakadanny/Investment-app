import React, { useState } from "react";

function InvestmentForm() {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearlySavings, setEnteredYearlySavings] = useState("");
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");

  const currentSavingsChangeHandler = (event) => {
    setEnteredCurrentSavings(event.target.value);
  };

  const yearlySavingsChangeHandler = (event) => {
    setEnteredYearlySavings(event.target.value);
  };

  const expectedInterestChangeHandler = (event) => {
    setEnteredExpectedInterest(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setEnteredDuration(event.target.value);
  };

  const CalculateInterestHandler = (event) => {
    event.preventDefault();
    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlySavings: enteredYearlySavings,
      expectedInterest: enteredExpectedInterest,
      duration: enteredDuration,
    };

    console.log(investmentData);
  };
  return (
    <div>
      <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={enteredCurrentSavings}
              onChange={currentSavingsChangeHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              value={enteredYearlySavings}
              onChange={yearlySavingsChangeHandler}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              value={enteredExpectedInterest}
              onChange={expectedInterestChangeHandler}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              value={enteredDuration}
              onChange={durationChangeHandler}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button
            type="submit"
            onClick={CalculateInterestHandler}
            className="button"
          >
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default InvestmentForm;
