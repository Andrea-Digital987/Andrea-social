import React from "react";
import "./style.css";
import { AiTwotoneDislike } from "react-icons/ai";
function DislikeButton({ dislikes }: { dislikes: number }) {
  return (
    <div className="button-dislike">
      <span>{dislikes}</span>
      <AiTwotoneDislike style={{ fontSize: 25, fill: "black" }} />
    </div>
  );
}

export default DislikeButton;
