import React from "react";
import "./ButtonDelete.css";

export const ButtonDelete = ({ onDeleteAll }) =>  {
  return <div >
    <button className="ButtonDelete" onClick={onDeleteAll}>
        Delete
    </button>
  </div>;
};
