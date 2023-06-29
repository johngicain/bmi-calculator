const ResultsRemarks = ({ bmiTotal }) => {
  return (
    <div className="w-full text-left text-sm font-thin md:w-1/2">
      Your BMI suggests you're a{bmiTotal[0] < 18.5 && <b> Underweight </b>}
      {bmiTotal[0] >= 18.6 && bmiTotal[0] <= 24.9 && <b> Healthy </b>}
      {bmiTotal[0] >= 25 && bmiTotal <= 29.9 && <b> Overweight </b>}
      {bmiTotal[0] > 30 && <b> Obese </b>} weight. Your ideal weight is between
      <b>
        {' '}
        63.3 {bmiTotal[1]} - 82.2 {bmiTotal[1]}
      </b>
      .
    </div>
  );
};

export default ResultsRemarks;
