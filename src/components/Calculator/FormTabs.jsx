import React, { useState } from 'react';
import InputRadio from '../UI/InputRadio';

const FormTabs = ({ activeForm, bmiResults }) => {
  const [selected, setSelected] = useState('metric');

  const selectValueHandler = (event) => {
    activeForm(event.target.value);
    setSelected(event.target.value);
    bmiResults('');
  };

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">Enter your details below</h3>
      <div className="mb-6 grid grid-cols-2">
        <InputRadio
          id="Metric"
          name="option"
          value="metric"
          className="inputRadio"
          onChange={selectValueHandler}
          onChecked={selected === 'metric'}
        />
        <InputRadio
          id="Imperial"
          name="option"
          value="imperial"
          className="inputRadio"
          onChange={selectValueHandler}
          onChecked={selected === 'imperial'}
        />
      </div>
    </div>
  );
};

export default FormTabs;
