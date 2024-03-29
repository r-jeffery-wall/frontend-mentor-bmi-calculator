import { useState, useEffect } from 'react';

export const BMI_Calculator = () => {
    const [units, setUnits] = useState('metric');
    const [heightCms, setHeightCms] = useState(0);
    const [weightKgs, setWeightKgs] = useState(0);
    const [BMI, setBMI] = useState(0);

    const toggleUnits = (event) => {
        setUnits(event.target.value);
    }

    const calculateBMI = () => {
        if (units === 'metric') { // Metric formula
            setBMI((weightKgs / ((heightCms / 100) ** 2)).toFixed(2));
        }
        if (units === 'imperial') { // Imperial formula
            
        }
    }

    useEffect(() => {
        if (heightCms && weightKgs) {
            calculateBMI()
        }
    })
    
    return (
    <div className="bmi-calculator">
      <h3>Enter your details below</h3>
      <form>
        <div id="radio-metric" className="input-group-radio">
          <input type="radio" id="metric" value="metric" checked={units === 'metric'} name='units' onChange={toggleUnits}/>
          <label for="metric">Metric</label>
        </div>
        <div id="radio-imperial" className="input-group-radio">
          <input type="radio" id="imperial" value="imperial" checked={units === 'imperial'} name='units' onChange={toggleUnits} />
          <label for="imperial">Imperial</label>
        </div>
        <div id="input-height" className="input-group-number">
          <label for="height">Height</label>
          <div className="input-unit">
            <input type="number" id="height" value={heightCms} onChange={(e) => setHeightCms(e.target.value)}/>
            <p className="unit">cm</p>
          </div>
        </div>
        <div id="input-weight" className="input-group-number">
          <label for="weight">Weight</label>
          <div className="input-unit">
          <input type="number" id="weight" value={weightKgs} onChange={(e) => setWeightKgs(e.target.value)}/>
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
