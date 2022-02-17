import React from "react";
import { Done } from "../actions/Done";
import { useDispatch } from "react-redux";
import { Delete } from "./../actions/Delete";
import { Update } from "./../actions/Update";
function Card({ id, text, done }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(Done(id))}
      key={id}
      className={` p-3 text-capitalize  border border-1  rounded-3 m-2 d-flex justify-content-between align-items-center text-wrap ${
        done ? "border-success" : "border-danger"
      }`}
    >
      <div> {text}</div>
      <div>
        <i
          onClick={(e) => {
            dispatch(Delete(id));
            e.stopPropagation();
          }}
          className="fas fa-trash text-danger mx-1    "
        ></i>
        <i
          onClick={(e) => {
            e.stopPropagation();
            dispatch(Update(id));
          }}
          className="fas fa-pen mx-1 text-info     "
        ></i>
      </div>
    </div>
  );
}

export default Card;
