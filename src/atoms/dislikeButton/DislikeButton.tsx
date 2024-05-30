import React from "react";
import "./style.css";
import { AiTwotoneDislike } from "react-icons/ai";
function DislikeButton({ dislikes , click}: { dislikes: number , click : Function }) {
  return (
    <div className="button-dislike" onClick={()=>click(dislikes+1)}>
      <span>{dislikes}</span>
      <AiTwotoneDislike style={{ fontSize: 25, fill: "black" }} />
    </div>
  );
}

export default DislikeButton;
