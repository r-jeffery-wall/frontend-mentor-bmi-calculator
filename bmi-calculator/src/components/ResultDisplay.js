export const ResultDisplay = ({ BMI, idealWeight, category }) => {
  if (BMI) {
    return (
        <div id="calculator-results" className="complete">
            <div className="bmi-result">
                <h5>Your BMI is...</h5>
                <h2 className="bmi">{BMI}</h2>
            </div>
            <p>Your BMI suggests you're {category}. Your ideal weight is between {idealWeight}</p>  
        </div>
    )
  } else {
    return (
        <div id="calculator-results">
          <h3>Welcome!</h3>
          <p>Enter your height and weight and you'll see your BMI result here</p>
        </div>
      );
  }

};
