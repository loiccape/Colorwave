import React from "react";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
export default function Graph({secondaryColor}) {
  return (
    <div className="p-2">
      <div className="d-flex justify-content-between container">
        <p>Page views / Revenue</p>
        <TfiLayoutMenuSeparated size={25} />
      </div>
      <div className="" >
        <div className="progress m-1">
          <div className={`progress-bar bg-${secondaryColor}`}></div>
        </div>
        <div className="progress  m-1">
          <div className={`progress-bar bg-${secondaryColor}`} style={{ width: "25%" }}></div>
        </div>
        <div className="progress  m-1">
          <div className={`progress-bar bg-${secondaryColor}`} style={{ width: "50%" }}></div>
        </div>
        <div className="progress m-1">
          <div className={`progress-bar bg-${secondaryColor}`} style={{ width: "75%" }}></div>
        </div>
        <div className="progress  m-1">
          <div className={`progress-bar bg-${secondaryColor}`} style={{ width: "25%" }}></div>
        </div>
      </div>
    </div>
  );
}
