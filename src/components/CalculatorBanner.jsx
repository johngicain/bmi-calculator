import CalculatorForm from './Calculator/CalculatorForm';

const CalculatorBanner = () => {
  return (
    <div className="mt-20 grid-cols-2 items-center gap-16 lg:flex">
      <div className="mb-8 w-full text-left lg:mb-0">
        <h1 className="mb-6 text-5xl font-semibold text-gray-700 lg:text-6xl">
          Body Mass Index Calculator
        </h1>
        <p className="text-sm text-[#5E6E85]">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
      <CalculatorForm />
    </div>
  );
};

export default CalculatorBanner;
