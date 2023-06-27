const ResultsRemarks = (props) => {
  <div className="w-full text-left text-sm font-thin md:w-1/2">
    You BMI suggests you're a {!props.bmiTotal && <b> ... </b>}
    {props.bmiTotal < 18.5 ?? <b> Underweight </b>}
    {props.bmiTotal >= 18.6 && props.bmiTotal <= 24.9 && <b> Healthy </b>}
    {props.bmiTotal >= 25 && props.bmiTotal <= 29.9 && <b> Overweight </b>}
    {props.bmiTotal > 30 && <b> Obese </b>} weight. Your ideal weight is between{' '}
    <b>63.3kgs - 82.2kgs</b>.
  </div>;
};

export default ResultsRemarks;
