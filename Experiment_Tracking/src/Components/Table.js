import React, { useState} from "react";
import "./Table.css";
import Button from "./Button";
import Add from "../Pics/Add.png";
import Filter from "../Pics/Filter.png";
import Delete from "../Pics/Delete.png";
import Popup from "./Popup";

function TableComponent(props) {
  const [data, setData] = useState(props.data);
  const [statusFilter, setStatusFilter] = useState("");
  const [createdByFilter, setCreatedByFilter] = useState("");
  const [showStatusInput, setShowStatusInput] = useState(false);
  const [showCreatedByInput, setShowCreatedByInput] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  const handleCreatedByFilter = (event) => {
    setCreatedByFilter(event.target.value);
  };

  const handleDeleteChecked = () => {
    const filteredData = data.filter((row) => !row.checked);
    setData(filteredData);
  };

  const filteredData = data.filter(
    (row) =>
      row.status.toLowerCase().includes(statusFilter.toLowerCase()) &&
      row.createdBy.toLowerCase().includes(createdByFilter.toLowerCase())
  );

  // Define a function to toggle the show/hide state for the Status input field
  const toggleStatusInput = () => {
    setShowStatusInput(!showStatusInput);
  };

  // Define a function to toggle the show/hide state for the Created By input field
  const toggleCreatedByInput = () => {
    setShowCreatedByInput(!showCreatedByInput);
  };

  function handleClick(row) {
    setShowPopup(true);
    setPopupData(row);
  }

  function handleClose() {
    setShowPopup(false);
  }

  function Status(props) {
    const { status } = props;

    let statusClass = "";
    if (status === "success") {
      statusClass = "success";
    } else if (status === "failed") {
      statusClass = "failed";
    }

    return <span className={statusClass}>{status}</span>;
  }

  return (
    <div className="TableContainer">
      <div className="TableButtons">
        <Button
          onClick={() => console.log("Add new run clicked")}
          name="New Run"
        >
          <img src={Add} alt="Not Found"></img>
        </Button>
        <Button onClick={() => console.log("Filter clicked")} name="Filter">
          <img src={Filter} alt="Not Found"></img>
        </Button>
        <Button onClick={handleDeleteChecked} name="Delete Checked">
          <img src={Delete} alt="Not Found"></img>
        </Button>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr className="topHeader">
              <th colSpan="7"></th>
              <th colSpan="4">Metrics</th>
            </tr>
            <tr className="bottomHeader">
              <th style={{ width: "5%" }}>Select</th>
              <th style={{ width: "15%" }}>Run ID</th>
              <th style={{ width: "7%" }}>Run Name</th>
              <th style={{ width: "7%" }}>
                <div>
                  <label
                    htmlFor="statusFilter"
                    style={{width: "100%"}}
                  >
                    Status
                  </label>
                  <img
                    onClick={toggleStatusInput}
                    src={Filter}
                    alt="Not Found"
                  ></img>
                  <br />
                  {showStatusInput && (
                    <input
                      id="statusFilter"
                      type="text"
                      style={{width: "100%"}}
                      value={statusFilter}
                      placeholder="Search..."
                      onChange={handleStatusFilter}
                    />
                  )}
                </div>
              </th>
              <th style={{ width: "10%" }}>
                <div>
                  <label htmlFor="createdByFilter">Created By</label>
                  <img
                    onClick={toggleCreatedByInput}
                    src={Filter}
                    alt="Not Found"
                  ></img>
                  <br />
                  {showCreatedByInput && (
                    <input
                      id="createdByFilter"
                      type="text"
                      style={{width: "100%"}}
                      value={createdByFilter}
                      placeholder="Search..."
                      onChange={handleCreatedByFilter}
                    />
                  )}
                </div>
              </th>
              <th style={{ width: "10%" }}>Start Time</th>
              <th style={{ width: "10%" }}>End Time</th>
              <th style={{ width: "9%" }}>Mean Absolute</th>
              <th style={{ width: "11%" }}>Mean Square Error</th>
              <th style={{ width: "11%" }}>Root Mean Square</th>
              <th style={{ width: "4%" }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={row.checked}
                    className="my-checkbox"
                    style={{ cursor: "pointer" }}
                    onChange={() => {
                      const newData = [...data];
                      const index = newData.findIndex((d) => d.id === row.id);
                      newData[index].checked = !newData[index].checked;
                      setData(newData);
                    }}
                  />
                </td>
                <td
                  className="RunId"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(row)}
                >
                  {row.RunId}
                </td>
                <td>{row.name}</td>
                <td>
                  <Status status={row.status} />
                </td>
                <td>{row.createdBy}</td>
                <td>{row.startTime}</td>
                <td>{row.endTime}</td>
                <td>{row.meanAbsolute}</td>
                <td>{row.meanSquareError}</td>
                <td>{row.rootMeanSquareError}</td>
                <td>{row.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showPopup && <Popup data={popupData} onClose={handleClose} />}
      </div>
    </div>
  );
}

export default TableComponent;
