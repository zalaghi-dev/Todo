import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
function Cards() {
  const act = useSelector((state) => state.activityReducer);
  return (
    <div className="p-2 text-white ">
      {act.map((act) => (
        <Card key={act.id} id={act.id} done={act.done} text={act.text} />
      ))}
    </div>
  );
}

export default Cards;
