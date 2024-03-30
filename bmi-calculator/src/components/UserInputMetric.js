export const UserInputsMetric = ( { height, weight, setHeight, setWeight} ) => {
    return (
       <> 
        <div id="input-height" className="input-group-number">
        <label for="height">Height</label>
        <div className="input-unit">
          <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)}/>
          <p className="unit">cm</p>
        </div>
      </div>
      <div id="input-weight" className="input-group-number">
        <label for="weight">Weight</label>
        <div className="input-unit">
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        <p className="unit">kg</p>
        </div>
      </div>
      </>
    )
}