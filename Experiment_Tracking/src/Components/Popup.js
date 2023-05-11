import React from "react";
import "./Popup.css";
import InsidePopUp from "./InsidePopUp"
import RunId from "../Pics/RunId.png";
import CreatedTime from "../Pics/CreatedTime.png";
import CloseIcon from "../Pics/Close.png";

function Popup(props) {
  const artifactsDataA = [
    { name: 'K Nearest Neighbours', version: '2.1.0', downloadLink: '#' },
    { name: 'Decision Tree Regressor', version: '3.1.0', downloadLink: '#' },
    { name: 'Linear Regression', version: '5.1.0', downloadLink: '#' },
    { name: 'Dummy Regressor', version: '8.1.0', downloadLink: '#' },
  ];
  const artifactsDataB = [
    { name: 'ML model', downloadLink: '#' },
    { name: 'Conda.yaml', downloadLink: '#' },
    { name: 'model.pkl', downloadLink: '#' },
    { name: 'python_env.yaml', downloadLink: '#' },
  ];
  return (
    <div className="popup">
      <div className="popup-content">
        <div>
          <div className="Heading">
            <label>Run Name: </label>
            <span>{props.data.name}</span>
            <div className="HeadingImage">
              <img src={CloseIcon} alt="Not Found" onClick={props.onClose}></img>
            </div>
          </div>
        </div>
        <div className="Subheading">
          <div className="RunID">
            <div className="Round">
              <img src={RunId} alt="Not Found"></img>
            </div>
            <label>Run ID : </label>
            <span>{props.data.id}</span>
          </div>
          <div className="CreatedAt">
            <div className="Round">
              <img src={CreatedTime} alt="Not Found"></img>
            </div>
            <label>Created at Date : </label>
            <span>{props.data.startTime}</span>
          </div>
        </div>
        <InsidePopUp metricsData={props.data} artifactsDataA={artifactsDataA} artifactsDataB={artifactsDataB}></InsidePopUp>
      </div>
    </div>
  );
}

export default Popup;
