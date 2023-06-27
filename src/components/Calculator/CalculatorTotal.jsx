import ResultsRemarks from './ResultsRemarks';

function resultRemarks() {
  return props.bmiTotal[0] < 18.5 && <b> Underweight </b>;
}

const CalculatorTotal = (props) => {
  return (
    <div>
      {props.bmiTotal ? (
        <div className="align-text-center mt-6 flex grid-cols-2 flex-col items-start rounded-lg bg-blue-600 p-4 align-middle text-white sm:flex-row sm:rounded-r-full md:p-6 lg:gap-4">
          <div className="flex w-full flex-col items-start justify-items-start md:w-1/2">
            <label htmlFor="" className="text-xs">
              Your BMI is...
            </label>
            <h1 className="text-[48px] font-bold lg:text-[64px]">
              {props.bmiTotal[0]}
            </h1>
          </div>
          {/* <ResultsRemarks bmiTotal={props.bmiTotal} /> */}
          <div className="w-full text-left text-sm font-thin md:w-1/2">
            You BMI suggests you're a{/* {resultRemarks()} */}
            {props.bmiTotal[0] < 18.5 && <b> Underweight </b>}
            {props.bmiTotal[0] >= 18.6 && props.bmiTotal[0] <= 24.9 && (
              <b> Healthy </b>
            )}
            {props.bmiTotal[0] >= 25 && props.bmiTotal <= 29.9 && (
              <b> Overweight </b>
            )}
            {props.bmiTotal[0] > 30 && <b> Obese </b>} weight. Your ideal weight
            is between
            <b>
              63.3 {props.bmiTotal[1]} - 82.2 {props.bmiTotal[1]}
            </b>
            .
          </div>
        </div>
      ) : (
        <div className="align-text-center mt-6 flex flex-col items-start rounded-lg bg-blue-600 p-4 align-middle text-white sm:rounded-r-full md:p-6 lg:gap-3">
          <h3 className="text-2xl font-semibold">Welcome!</h3>
          <p className="text-sm font-light">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculatorTotal;
