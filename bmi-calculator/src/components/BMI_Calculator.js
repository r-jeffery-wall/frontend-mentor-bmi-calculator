export const BMI_Calculator = () => {
  return (
    <div className="bmi-calculator">
      <h3>Enter your details below</h3>
      <form>
          <div id="radio-metric">
            <input type="radio" id="metric" />
            <label for="metric">Metric</label>
          </div>
          <div id="radio-imperial">
            <input type="radio" id="imperial" />
            <label for="imperial">Imperial</label>
          </div>
          <div id="input-height">
            <label for="height">Height</label>
            <input type="number" id="height" />
          </div>
          <div id="input-weight">
            <label for="weight">Weight</label>
            <input type="number" id="weight" />
          </div>
        <button type="submit">
          <h3>Welcome!</h3>
          <p>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </button>
      </form>
    </div>
  );
};
