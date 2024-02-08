import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams: {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered(value))}>Order ice cream</button>
      <input
        type="number"
        style={{ width: "10ch", textAlign: "center" }}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock ice cream
      </button>
    </div>
  );
};
