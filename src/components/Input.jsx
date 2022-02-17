import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "./../actions/handleChange";
import { Add } from "./../actions/Add";
function Input() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.handleChange);
  const onEdit = useSelector((state) => state.onEdit);
  const InputRef = useRef(null);
  useEffect(() => {
    InputRef.current.focus();
  }, []);
  useEffect(() => {
    InputRef.current.focus();
  }, [onEdit]);

  return (
    <div className="p-2">
      <input
        value={text}
        onChange={(text) => dispatch(handleChange(text.target.value))}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(Add());
          }
        }}
        className="rounded-3 border border-1 p-2 border-danger w-100 bg-transparent text-white fw-bolder mb-1"
        ref={InputRef}
        type="text"
      />
    </div>
  );
}

export default Input;
