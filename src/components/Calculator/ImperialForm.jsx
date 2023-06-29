import React, { useState } from 'react';
import InputText from '../UI/InputText';

const ImperialForm = ({ bmiResults }) => {
  const [enteredFt, setEnteredFt] = useState();
  const [enteredIn, setEnteredIn] = useState();
  const [enteredSt, setEnteredSt] = useState();
  const [enteredLbs, setEnteredLbs] = useState();

  const ftValueHandler = (event) => {
    setEnteredFt(event.target.value);
  };

  const inValueHandler = (event) => {
    setEnteredIn(event.target.value);
  };

  const stValueHandler = (event) => {
    setEnteredSt(event.target.value);
  };

  const lbsValueHandler = (event) => {
    setEnteredLbs(event.target.value);
  };

  const bmiResultsHandler = (event) => {
    // Height value
    const inValue = enteredFt * 12;
    const ftInValue = inValue + Number(enteredIn);
    // console.log(ftInValue);
    // Weight value
    const stValue = enteredSt * 14;
    const stLbsValue = stValue + Number(enteredLbs);
    // console.log(stLbsValue);
    const imperialBMIValue = ((stLbsValue / ftInValue ** 2) * 703).toFixed(1);
    const imperialResults = [imperialBMIValue, 'lbs', 'st'];
    const key = event.key;

    key == 'Enter' && bmiResults(imperialResults);
  };

  return (
    <div>
      <form
        className="grid grid-cols-2 gap-4"
        action=""
        onKeyDown={(event) => {
          bmiResultsHandler(event);
        }}
      >
        <InputText
          type="number"
          label="Height"
          className="inputText"
          innerLabel="ft"
          value={enteredFt}
          onChange={ftValueHandler}
        />
        <InputText
          type="number"
          label="&nbsp;"
          className="inputText"
          innerLabel="in"
          value={enteredIn}
          onChange={inValueHandler}
        />
        <InputText
          type="number"
          label="Weight"
          className="inputText"
          innerLabel="st"
          value={enteredSt}
          onChange={stValueHandler}
        />
        <InputText
          type="number"
          label="&nbsp;"
          className="inputText"
          innerLabel="lbs"
          value={enteredLbs}
          onChange={lbsValueHandler}
        />
      </form>
    </div>
  );
};

export default ImperialForm;
