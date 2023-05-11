import React, { useState } from "react";
import TableComponent from "./Table";
import "./Options.css";

function Options(props) {
  const [selectedTab, setSelectedTab] = useState("tab1");

  return (
    <div>
      <div className="tab-container">
        <div
          className={`tab ${selectedTab === "tab1" && "active"}`}
          onClick={() => setSelectedTab("tab1")}
        >
          USER MANAGEMENT
        </div>
        <div
          className={`tab ${selectedTab === "tab2" && "active"}`}
          onClick={() => setSelectedTab("tab2")}
        >
          ROLE MANAGEMENT
        </div>
      </div>
      <div className="tab-content">
        {selectedTab === "tab1" ? (
          <Tab1Content data={props.data} />
        ) : (
          <Tab2Content />
        )}
      </div>
    </div>
  );
}

function Tab1Content({ data, setData }) {
  return (
    <div>
      <TableComponent data={data} setData={setData} />
    </div>
  );
}

function Tab2Content() {
  return <div>Yet to be Designed.</div>;
}

export default Options;
