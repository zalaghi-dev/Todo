import React from "react";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../actions/Add";
import { Erase } from "../actions/Erase";

export default function Header() {
  const dispatch = useDispatch();
  const acts = useSelector((state) => state.activityReducer);
  return (
    <>
      <div className="display-6 fw-bolder text-white bg-danger p-3 text-center">
        HENRY~TODO
      </div>
      <div className="p-2 text-white bg-dark">
        <Input />
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-danger d-flex justify-content-start p-2 fs-3">
            <i
              onClick={() => dispatch(Add())}
              className="fas fa-check mx-2    "
            ></i>
            <i className="fas fa-eye mx-2    "></i>
            <i
              onClick={() => {
                if (window.confirm("Are you sure to clean list?")) {
                  dispatch(Erase());
                }
              }}
              className="fas fa-eraser mx-2    "
            ></i>
          </div>
          <div className=" d-flex">
            <div className="p-2">
              Num: <span className="fw-bolder text-danger">{acts.length}</span>
            </div>
            <div className="p-2">
              Done:{" "}
              <span className="fw-bolder text-danger"> 
                {acts.filter((v) => v.done === true).length}
              </span>
            </div>
            <div className="p-2">
              UnDone:{" "}
              <span className="fw-bolder text-danger">
                {acts.length - acts.filter((v) => v.done === true).length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
