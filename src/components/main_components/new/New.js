import React from 'react';

export default function New({secondaryColor,fontColor}) {
  return (
    <div className={`mt-4 bg-${secondaryColor} d-flex flex-column justify-content-center rounded align-items-center col-11 col-sm-12 mx-auto`} style={{height:"200px", textAlign: "center"}}>

    <div className='w-50'>
      <p  className="fs-6"style={{wordWrap: "break-word", fontWeight:'600'}}>
      Color Wave now has templates available! Have a cool template idea?
      </p>
    </div>
    <button className={`btn btn-outline-${fontColor}`} style={{fontWeight:"500"}}>Submit it!</button>
    </div>
  );
}
