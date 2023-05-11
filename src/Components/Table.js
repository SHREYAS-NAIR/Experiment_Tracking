import React, { useState } from "react";
import "./Table.css";
import Button from "./Button";
import Add from "../Pics/Add.png";
import Delete from "../Pics/Delete.png";
import EditPopup from "./EditPopup";
import Edit from "../Pics/Edit.png";

function TableComponent(props) {  // removed local data state and used props
  const [editRow, setEditRow] = useState(null);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [rowNumber, setRowNumber] = useState(null);

  function assignRowNumber(assignedRowNumber) {
    console.log(rowNumber);
    setRowNumber(assignedRowNumber);
  }
  
  function handleClick(row) {
    setEditRow(row);
    setShowEditPopup(true);
  }

  function handleUpdate(updatedRow) {
    const newData = props.data.map((row) => {
      if (row.id === updatedRow.id) {
        return updatedRow;
      }
      return row;
    });
    setShowEditPopup(false);
  }

  function handleCancel() {
    setEditRow(null);
    setShowEditPopup(false);
  }

  function Status(props) {
    const { status } = props;

    let statusClass = "";
    if (status === "Active") {
      statusClass = "Active";
    } else if (status[0] === "P") {
      statusClass = "Pending";
    }

    return <span className={statusClass}>{status}</span>;
  }

  return (
    <div className="TableContainer">
      <div className="TableButtons">
        <div onClick={() => console.log("Add new user clicked")}>
          <Button name="New User">
            <img src={Add} alt="Not Found" />
          </Button>
        </div>
        <div onClick={() => handleClick(rowNumber || 0)}>
          <Button name="Edit">
            <img src={Edit} alt="Not Found" />
          </Button>
        </div>
        <div
          onClick={() => {
            console.log("Delete Clicked");
          }}
        >
          <Button name="Delete">
            <img src={Delete} alt="Not Found" />
          </Button>
        </div>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr className="bottomHeader">
              <th colSpan={2} style={{ paddingLeft: "95px" }}>
                Full Name
              </th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Department</th>
              <th>Business Unit</th>
              <th>Created By</th>
              <th>Created At</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((row) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={row.checked || false}
                    className="my-checkbox"
                    style={{ cursor: "pointer" }}
                    onChange={(e) => {
                      const newData = [...props.data];
                      const index = newData.findIndex((d) => d.id === row.id);
                      newData[index].checked = !newData[index].checked;
                      if (e.target.checked) {
                        assignRowNumber(row);
                      } else {
                        assignRowNumber(null);
                      }
                    }}
                  />
                </td>
                <td className="fullName" style={{ cursor: "pointer" }}>
                  {row.fullName}
                </td>
                <td>{row.userEmail}</td>
                <td>{row.userRole}</td>
                <td>{row.department}</td>
                <td>{row.businessUnit}</td>
                <td>{row.createdBy}</td>
                <td>{row.createdAt}</td>
                <td>
                  <Status status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showEditPopup && (
          <EditPopup
            row={editRow}
            rowNumber={rowNumber}
            onSave={handleUpdate}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default TableComponent;
