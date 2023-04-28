import { useState } from 'react';
import './Table.css'

function TableComponent(props) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(props.data);
  const [sortBy, setSortBy] = useState({column: null, order: "asc"});
  
  // Handle select/deselect of a row
  function handleSelectRow(id) {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  }
  
  // Handle select/deselect of all rows
  function handleSelectAllRows() {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(row => row.id));
    }
  }
  
  // Handle delete of selected rows
  function handleDeleteSelectedRows() {
    const newData = data.filter(row => !selectedRows.includes(row.id));
    setData(newData);
    setSelectedRows([]);
  }
  
  // Handle sort of table data
  function handleSort(column) {
    let newData = [...data];
    let order = "asc";
    
    if (sortBy.column === column && sortBy.order === "asc") {
      order = "desc";
    }
    
    setSortBy({ column: column, order: order });
    
    if (column === "status") {
      let statusMap = {"Success": 0, "Failure": 1};
      newData.sort((a, b) => (statusMap[a[column]] - statusMap[b[column]]) * (order === "asc" ? 1 : -1));
    } else if (column === "createdBy") {
      newData.sort((a, b) => a[column].localeCompare(b[column]) * (order === "asc" ? 1 : -1));
    }
    
    setData(newData);
  }
  
  const handleAddNew = () => {
    // Add new row to data
  };
  
  const handleFilter = () => {
    // Filter data based on user input
  };
  
  return (
    <div>
      <div>
        <button onClick={handleDeleteSelectedRows}>Delete Selected</button>
        <button onClick={handleAddNew}>Add New Item</button>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedRows.length === data.length}
                onChange={handleSelectAllRows}
              />
            </th>
            <th onClick={() => handleSort("id")}>Run Id</th>
            <th onClick={() => handleSort("name")}>Run Name</th>
            <th onClick={() => handleSort("status")}>Status</th>
            <th onClick={() => handleSort("createdBy")}>Created By</th>
            <th onClick={() => handleSort("startTime")}>Start Time</th>
            <th onClick={() => handleSort("endTime")}>
