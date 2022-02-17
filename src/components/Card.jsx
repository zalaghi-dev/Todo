import React from "react";
import { Done } from "../actions/Done";
import { useDispatch } from "react-redux";
import { Delete } from "./../actions/Delete";
function Card({ id, text, done }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(Done(id))}
      key={id}
      className={` p-3 border border-1  rounded-3 m-2 d-flex justify-content-between align-items-center text-wrap ${
        done ? "border-success" : "border-danger"
      }`}
    >
      <div> {text}</div>
      <div>
        <i
          onClick={() => dispatch(Delete(id))}
          className="fas fa-trash text-danger mx-1     "
        ></i>
        <i class="fas fa-pen mx-1 text-info     "></i>
      </div>
    </div>
  );
}

export default Card;
