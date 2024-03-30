import { useState, useEffect } from 'react';
import { UserInputsMetric } from './UserInputMetric';
import { ResultDisplay } from './ResultDisplay';
import { UserInputsImperial } from './UserInputImperial';

export const BMI_Calculator = () => {
    const [units, setUnits] = useState('metric');
    const [heightCms, setHeightCms] = useState(0);
    const [weightKgs, setWeightKgs] = useState(0);
    const [heightFt, setHeightFt] = useState(0);
    const [heightIn, setHeightIn] = useState(0);
    const [weightSt, setWeightSt] = useState(0);
    const [weightLbs, setWeightLbs] = useState(0);
    const [idealWeight, setIdealWeight] = useState([0, 0]);
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
    <div className="bmi-calculator" id={units}>
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
        {units === 'metric' ? <UserInputsMetric height={heightCms} weight={weightKgs} setHeight={setHeightCms} setWeight={setWeightKgs} /> : <UserInputsImperial feet={heightFt} inches={heightIn} stone={weightSt} lbs={weightLbs} setFeet={setHeightFt} setInches={setHeightIn} setStone={setWeightSt} setLbs={setWeightLbs} /> }
          <ResultDisplay />
      </form>
    </div>
  );
};
