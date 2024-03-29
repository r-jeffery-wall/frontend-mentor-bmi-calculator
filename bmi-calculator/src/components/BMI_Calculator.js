export const BMI_Calculator = () => {
  return (
    <div className="bmi-calculator">
      <h3>Enter your details below</h3>
      <form>
        <div id="radio-metric" className="input-group-radio">
          <input type="radio" id="metric" checked />
          <label for="metric">Metric</label>
        </div>
        <div id="radio-imperial" className="input-group-radio">
          <input type="radio" id="imperial" />
          <label for="imperial">Imperial</label>
        </div>
        <div id="input-height" className="input-group-number">
          <label for="height">Height</label>
          <div className="input-unit">
            <input type="number" id="height" />
            <p className="unit">cm</p>
          </div>
        </div>
        <div id="input-weight" className="input-group-number">
          <label for="weight">Weight</label>
          <div className="input-unit">
          <input type="number" id="weight" />
          <p className="unit">kg</p>
          </div>
        </div>
        <div id="calculator-results">
          <h3>Welcome!</h3>
          <p>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>
      </form>
    </div>
  );
};
