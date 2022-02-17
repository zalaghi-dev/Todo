import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
function Cards() {
  const act = useSelector((state) => state.activityReducer);
  if (act.length === 0) {
    return (
      <div className="display-1 text-white text-center m-5">
        <i className="fas fa-cat    "></i> <br />
        <span>Nothing</span> <br />
        <span>.....</span>
      </div>
    );
  } else {
    return (
      <div className="p-2 text-white ">
        {act.map((act) => (
          <Card key={act.id} id={act.id} done={act.done} text={act.text} />
        ))}
      </div>
    );
  }
}

export default Cards;
