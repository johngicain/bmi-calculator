import React, { useState } from 'react';
import MetricForm from './MetricForm';
import ImperialForm from './ImperialForm';
import FormTabs from './FormTabs';
import CalculatorTotal from './CalculatorTotal';

const CalculatorForm = (props) => {
  const [activeForm, setActiveForm] = useState('metric');
  const [bmiResults, setBmiResults] = useState(false);

  const activeFormHandler = (selectedTab) => {
    setActiveForm(selectedTab);
  };

  const bmiResultsHandler = (result) => {
    setBmiResults(result);
  };

  return (
    <div className="w-full rounded-xl bg-white p-8 drop-shadow-2xl">
      <FormTabs activeForm={activeFormHandler} activeTab={activeForm} />
      {activeForm === 'metric' ? (
        <MetricForm
          metricResult={bmiResultsHandler}
          bmiResults={bmiResultsHandler}
        />
      ) : (
        <ImperialForm bmiResults={bmiResultsHandler} />
      )}
      <CalculatorTotal bmiTotal={bmiResults} />
    </div>
  );
};

export default CalculatorForm;
