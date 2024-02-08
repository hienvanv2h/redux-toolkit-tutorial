import { useState } from "react";
import { ordered, restocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCreams = useAppSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();
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
