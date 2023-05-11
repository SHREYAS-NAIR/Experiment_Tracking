import React, { useState } from "react";
import Button from "./Button";
import "./EditPopup.css";
import CloseButton from "../Pics/Close.png";

function EditPopup(props) {
  const { row, onSave, onCancel } = props;
  const [editedRow, setEditedRow] = useState(row);

  const [firstName, setFirstName] = useState(NameSplit(row.fullName, 0));
  const [lastName, setLastName] = useState(NameSplit(row.fullName, 1));

  function handleSave() {
    onSave(editedRow);
  }

  function handleCancel() {
    onCancel();
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    
    if (name === "firstName") {
      setFirstName(value);
      setEditedRow((prevRow) => ({ ...prevRow, fullName: value + " " + lastName }));
    } else if (name === "lastName") {
      setLastName(value);
      setEditedRow((prevRow) => ({ ...prevRow, fullName: firstName + " " + value }));
    } else {
      setEditedRow((prevRow) => ({ ...prevRow, [name]: value }));
    }
  }

  function NameSplit(fullName, position) {
    const nameParts = fullName.split(" ");
    const lastName = nameParts.pop(); // Get the last word as last name
    const firstName = nameParts.join(" ");
    if (position === 0) {
      return firstName;
    }
    if (position === 1) {
      return lastName;
    }
  }

  return (
    <div className="popup-wrapper">
      <div className="popup-content">
        <div className="EditHeading">
          <div>
            <label>Edit User</label>
          </div>
          <div>
            <img
              src={CloseButton}
              alt="Not Found"
              onClick={() => {
                handleCancel();
              }}
            ></img>
          </div>
        </div>
        <form className="EditForm">
          <div className="EditRow1">
            <div className="EditCol1">
              <div>
                <label>First Name</label>
              </div>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={NameSplit(editedRow.fullName, 0)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="EditCol2">
              <div>
                <label>Last Name</label>
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={NameSplit(editedRow.fullName, 1)}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="EditRow2">
            <div className="EditCol1">
              <div>
                <label>Email ID</label>
              </div>
              <div>
                <input
                  type="text"
                  name="userEmail"
                  value={editedRow.userEmail}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="EditCol2">
              <div>
                <label>Assigned User Role</label>
              </div>
              <div>
                <input
                  type="text"
                  name="userRole"
                  value={editedRow.userRole}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="EditRow3">
            <div className="EditCol1">
              <div>
                <label>Department</label>
              </div>
              <div>
                <input
                  type="text"
                  name="department"
                  value={editedRow.department}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="EditCol2">
              <div>
                <label>Business Unit</label>
              </div>
              <div>
                <input
                  type="text"
                  name="businessUnit"
                  value={editedRow.businessUnit}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="popup-buttons">
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default EditPopup;
