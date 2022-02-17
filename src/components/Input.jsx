import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "./../actions/handleChange";
function Input() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.handleChange);
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.focus();
  }, []);

  return (
    <div className="p-2">
      <input
        value={text}
        onChange={(text) => dispatch(handleChange(text.target.value))}
        className="rounded-3 border border-1 p-2 border-danger w-100 bg-transparent text-white fw-bolder mb-1"
        ref={InputRef}
        type="text"
      />
    </div>
  );
}

export default Input;
