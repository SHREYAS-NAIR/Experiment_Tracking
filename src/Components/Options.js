import React, { useState } from "react";
import TableComponent from "./Table";
import "./Options.css";
import Button from "./Button";

function Options(props) {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <div>
      <div className="tab-container">
          <div
            className={`tab ${selectedTab === "tab1" && "active"}`}
            onClick={() => setSelectedTab("tab1")}
          >
            PIPELINES
          </div>
          <div
            className={`tab ${selectedTab === "tab2" && "active"}`}
            onClick={() => setSelectedTab("tab2")}
          >
            EXPERIMENT TRACKING
          </div>
          <div className="GoToServing"><Button name="Go to Serving"/></div>
      </div>
      <div className="tab-content">
        {selectedTab === "tab1" ? (
          <Tab1Content />
        ) : (
          <Tab2Content data={props.data} />
        )}
      </div>
    </div>
  );
}

function Tab1Content() {
  return <div>Yet to be Designed.</div>;
}

function Tab2Content(props) {
  return <div><TableComponent data={props.data} /></div>;
}

export default Options;
