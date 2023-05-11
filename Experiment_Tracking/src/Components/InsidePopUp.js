import React, { useState } from "react";
import "./InsidePopUp.css";
import Artifacts from "../Pics/Artifacts.png";
import Metrics from "../Pics/Metrics.png";
import Parametes from "../Pics/Parametes.png";
import Download from "../Pics/Download.png";
import Folder from "../Pics/Folder.png";
import Seperator from "../Pics/Seperator.png";
import Artifacts_sub from "../Pics/Artifacts_sub.png";
import Download_sub from "../Pics/Download_sub.png";

const TabContent = ({ tab, metricsData, artifactsDataA, artifactsDataB }) => {
  if (tab === "Artifacts") {
    return (
      <div className="artifacts">
        <div className="leftSide">
          {artifactsDataA.map((artifact, index) => (
            <div key={artifact.name}>
              <table style={{ borderTop: "1px solid #070d19" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "5%" }}>
                      <img src={Folder} alt="Not Found"></img>
                    </td>
                    <td style={{ width: "50%" }}>{artifact.name}</td>
                    <td style={{ width: "30%" }}>Version {artifact.version}</td>
                    <td style={{ width: "5%" }}>
                      <a href={artifact.downloadLink}>
                        <img src={Download} alt="Not Found"></img>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <div className="seperator">
          <img src={Seperator} alt="Not Found"></img>
        </div>
        <div className="rightSide">
          {artifactsDataB.map((artifact, index) => (
            <div key={artifact.name}>
              <table style={{ borderTop: "1px solid #070d19" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "5%" }}>
                      <img src={Artifacts_sub} alt="Not Found"></img>
                    </td>
                    <td style={{ width: "50%" }}>{artifact.name}</td>
                    <td style={{ width: "5%" }}>
                      <a href={artifact.downloadLink}>
                        <img src={Download_sub} alt="Not Found"></img>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (tab === "Metrics") {
    return (
      <div className="TableStyle">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MEAN ABSOLUTE</td>
              <td>{metricsData.meanAbsolute}</td>
            </tr>
            <tr>
              <td>MEAN SQUARE ERROR</td>
              <td>{metricsData.meanSquareError}</td>
            </tr>
            <tr>
              <td>ROOT MEAN SQUARE</td>
              <td>{metricsData.rootMeanSquareError}</td>
            </tr>
            <tr>
              <td>SCORE</td>
              <td>{metricsData.score}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else if (tab === "Parameters") {
    const dummyData = [
      { name: "BEST ALGORITHM", value: "Dummy Data 1" },
      { name: "MAX_DEPTH", value: "Dummy Data 2" },
      { name: "MAX_FEATURES", value: "Dummy Data 3" },
      { name: "MIN_SAMPLE_LEAF", value: "Dummy Data 4" },
    ];

    return (
      <div className="TableStyle">
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((param) => (
              <tr key={param.name}>
                <td>{param.name}</td>
                <td>{param.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};

const MyComponent = ({ metricsData, artifactsDataA, artifactsDataB }) => {
  const [activeTab, setActiveTab] = useState("Artifacts");
  const getTabStyle = (tab) => {
    return activeTab === tab ? { color: "#B0D136" } : {};
  };
  return (
    <div>
      <div className="tabs">
        <div
          style={getTabStyle("Artifacts")}
          onClick={() => setActiveTab("Artifacts")}
        >
          <img src={Artifacts} alt="Not Found"></img>Artifacts
        </div>
        <div
          style={getTabStyle("Metrics")}
          onClick={() => setActiveTab("Metrics")}
        >
          <img src={Metrics} alt="Not Found"></img>Metrics
        </div>
        <div
          style={getTabStyle("Parameters")}
          onClick={() => setActiveTab("Parameters")}
        >
          <img src={Parametes} alt="Not Found"></img>Parameters
        </div>
      </div>
      <div className="EmptyDiv"></div>
      <TabContent
        tab={activeTab}
        metricsData={metricsData}
        artifactsDataA={artifactsDataA}
        artifactsDataB={artifactsDataB}
      />
    </div>
  );
};

export default MyComponent;
