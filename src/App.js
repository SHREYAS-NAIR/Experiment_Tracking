import React from "react";
import Options from "./Components/Options";

function App() {
  const data = [
    {
      id: 1,
      fullName: "John Doe",
      userEmail: "johndoe@example.com",
      userRole: "Admin",
      department: "IT",
      businessUnit: "Operations",
      createdBy: "Jane Smith",
      createdAt: "2022-01-01",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      userEmail: "janesmith@example.com",
      userRole: "User",
      department: "Marketing",
      businessUnit: "Sales",
      createdBy: "John Doe",
      createdAt: "2022-02-01",
      status: "Pending...",
    },
    {
      id: 3,
      fullName: "Bob Johnson",
      userEmail: "bobjohnson@example.com",
      userRole: "User",
      department: "HR",
      businessUnit: "Operations",
      createdBy: "Jane Smith",
      createdAt: "2022-03-01",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Sarah Lee",
      userEmail: "sarahlee@example.com",
      userRole: "User",
      department: "Finance",
      businessUnit: "Accounting",
      createdBy: "Bob Johnson",
      createdAt: "2022-04-01",
      status: "Pending...",
    },
    {
      id: 5,
      fullName: "Tom Smith",
      userEmail: "tomsmith@example.com",
      userRole: "User",
      department: "IT",
      businessUnit: "Operations",
      createdBy: "Jane Smith",
      createdAt: "2022-05-01",
      status: "Active",
    },
    {
      id: 6,
      fullName: "Alice Cooper",
      userEmail: "alicecooper@example.com",
      userRole: "Admin",
      department: "IT",
      businessUnit: "Development",
      createdBy: "John Doe",
      createdAt: "2022-06-01",
      status: "Active",
    },
    {
      id: 7,
      fullName: "Mike Johnson",
      userEmail: "mikejohnson@example.com",
      userRole: "User",
      department: "Marketing",
      businessUnit: "Sales",
      createdBy: "Jane Smith",
      createdAt: "2022-07-01",
      status: "Pending...",
    },
    {
      id: 8,
      fullName: "Emily Davis",
      userEmail: "emilydavis@example.com",
      userRole: "User",
      department: "HR",
      businessUnit: "Operations",
      createdBy: "Bob Johnson",
      createdAt: "2022-08-01",
      status: "Active",
    },
    {
      id: 9,
      fullName: "Ryan Lee",
      userEmail: "ryanlee@example.com",
      userRole: "User",
      department: "Finance",
      businessUnit: "Accounting",
      createdBy: "Sarah Lee",
      createdAt: "2022-09-01",
      status: "Pending...",
    },
    {
      id: 10,
      fullName: "Alex Wong",
      userEmail: "alexwong@example.com",
      userRole: "User",
      department: "IT",
      businessUnit: "Development",
      createdBy: "Alice Cooper",
      createdAt: "2022-10-01",
      status: "Active",
    },
  ]
  return (
    <div style={{ backgroundColor: "#070D19", caretColor: "transparent" }}>
      <Options data={data} />
    </div>
  );
}

export default App;
