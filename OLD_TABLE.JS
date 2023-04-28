import React, { useState } from 'react';

function TableComponent({ data }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort('runId')}>
            Run Id {sortConfig.key === 'runId' && getSortIcon()}
          </th>
          <th onClick={() => handleSort('runName')}>
            Run Name {sortConfig.key === 'runName' && getSortIcon()}
          </th>
          <th onClick={() => handleSort('status')}>
            Status {sortConfig.key === 'status' && getSortIcon()}
          </th>
          <th onClick={() => handleSort('createdBy')}>
            Created By {sortConfig.key === 'createdBy' && getSortIcon()}
          </th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );

  function renderRows() {
    let sortedData = data;
    if (sortConfig.key) {
      sortedData = data.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return sortedData.map((row, index) => (
      <tr key={index}>
        <td>{row.runId}</td>
        <td>{row.runName}</td>
        <td>{row.status}</td>
        <td>{row.createdBy}</td>
      </tr>
    ));
  }

  function handleSort(key) {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  }

  function getSortIcon() {
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  }
}
