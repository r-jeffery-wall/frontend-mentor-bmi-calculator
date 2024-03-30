export const UserInputs = ( {unit, heightCms, weightKgs, setHeightCms, setWeightKgs} ) => {
    return (
       <> 
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
      </>
    )
}