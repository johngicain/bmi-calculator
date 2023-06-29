import ResultsRemarks from './ResultsRemarks';

const CalculatorTotal = ({ bmiTotal }) => {
  return (
    <div>
      {bmiTotal ? (
        <div className="align-text-center mt-6 flex grid-cols-2 flex-col items-start rounded-lg bg-blue-600 p-4 align-middle text-white sm:flex-row sm:rounded-r-full md:p-6 lg:gap-4">
          <div className="flex w-full flex-col items-start justify-items-start md:w-1/2">
            <label htmlFor="" className="text-xs">
              Your BMI is...
            </label>
            <h1 className="text-[48px] font-bold lg:text-[64px]">
              {bmiTotal[0]}
            </h1>
          </div>
          <ResultsRemarks bmiTotal={bmiTotal} />
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
