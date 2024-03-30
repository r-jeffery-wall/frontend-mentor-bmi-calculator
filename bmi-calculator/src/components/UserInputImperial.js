export const UserInputsImperial = ({
  feet,
  inches,
  stone,
  lbs,
  setFeet,
  setInches,
  setStone,
  setLbs,
}) => {
  return (
    <div id="inputs-imperial">
      <div className="input-group-number">
        <label for="feet">Height</label>
        <div className="imperial-input-group">
          <div className="input-unit">
            <input
              type="number"
              id="feet"
              value={feet}
              onChange={(e) => setFeet(Number(e.target.value))}
            />
            <p className="unit">ft</p>
          </div>
          <div className="input-unit">
            <input
              type="number"
              id="inches"
              value={inches}
              onChange={(e) => setInches(Number(e.target.value))}
            />
            <p className="unit">in</p>
          </div>
        </div>
      </div>
      <div className="input-group-number">
        <label for="stone">Weight</label>
        <div className="imperial-input-group">
          <div className="input-unit">
            <input
              type="number"
              id="stone"
              value={stone}
              onChange={(e) => setStone(Number(e.target.value))}
            />
            <p className="unit">st</p>
          </div>
          <div className="input-unit">
            <input
              type="number"
              id="lbs"
              value={lbs}
              onChange={(e) => setLbs(Number(e.target.value))}
            />
            <p className="unit">lbs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
