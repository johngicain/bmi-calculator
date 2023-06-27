import React, { useState } from 'react';
import InputText from '../UI/InputText';
import CalculatorTotal from './CalculatorTotal';

const MetricForm = (props) => {
  const [enteredHeight, setEnteredHeight] = useState();
  const [enteredWeight, setEnteredWeight] = useState();

  const heightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };

  const bmiResultsHandler = (event) => {
    const key = event.key;
    const cmValue = enteredHeight * 0.01;
    const metricBMIValue = (enteredWeight / cmValue ** 2).toFixed(1);
    const metricResults = [metricBMIValue, 'kgs'];

    key == 'Enter' && props.bmiResults(metricResults); 
  };

  return (
    <div>
      <form
        className="flex gap-4"
        onKeyDown={(event) => bmiResultsHandler(event)}
      >
        <InputText
          type="number"
          label="Height"
          innerLabel="cm"
          className="inputText"
          value={enteredHeight}
          onChange={heightChangeHandler}
        />
        <InputText
          type="number"
          label="Weight"
          innerLabel="kg"
          className="inputText"
          value={enteredWeight}
          onChange={weightChangeHandler}
        />
      </form>
      {/* <CalculatorTotal bmiTotal={props.bmiTotal} /> */}
    </div>
  );
};

export default MetricForm;
