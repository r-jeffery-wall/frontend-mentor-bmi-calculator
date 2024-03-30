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
    const [idealWeightMetric, setIdealWeightMetric] = useState([0, 0]);
    const [category, setCategory] = useState('');
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

    const chooseCategory = () => {
      if (BMI < 18.5) {
        return 'underweight';
      } else if (BMI <= 24.9) {
        return 'a healthy weight';
      } else if (BMI <= 29.9) {
        return 'overweight'
      } else {
        return 'obese';
      }
    }

    const calculateIdealWeightMetric = () => {
      const lowerBound = 18.5 * ((heightCms / 100) ** 2);
      const upperBound = 24.9 * ((heightCms / 100) ** 2);
      return [lowerBound.toFixed(2), upperBound.toFixed(2)];
    }

    useEffect(() => {
        if (heightCms && weightKgs) {
            calculateBMI()
        }
    }, [heightCms, weightKgs, heightFt, heightIn, weightSt, weightLbs, units])

    useEffect(() => {
      setCategory(chooseCategory());
      setIdealWeightMetric(calculateIdealWeightMetric());
    }, [BMI])
    
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
