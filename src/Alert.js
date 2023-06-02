import React from "react";

function Alert(props) {
  
  return (

    props.alert && (
      <div className="content">
        <div
          className={`alert alert-${props.alert.type} alert-white rounded d-${props.alert.display}`}
        >
          <div className="icon">
            <i className={`fa ${props.alert.type === "success"?"fa-check":"fa-times-circle"}`}></i>
          </div>
          <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}!</strong> {props.alert.message}
        </div>
      </div>
    )
  );
}

export default Alert;
