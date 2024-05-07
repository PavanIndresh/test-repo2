import React from "react";

function Card(props) {
   
    return (
      <div
        style={{width: '47%',
            height: '100%',
            backgroundColor: 'yellow'
            }}
      >
        <img className="imageban" src={props.office}/>
        <p>{props.desc}</p>
        </div>
    );
  }
  
  export default Card
  