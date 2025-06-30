import Link from "next/link";
import { StyledTable, StyledTableCell } from "./styles";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import StatusIndicatorDiv from "@/components/Status";
import { User } from "@/types/admin/admin";

interface UserTableProps {
  users: User[];
  softDelete?: Function;
  hardDelete?: Function;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  softDelete = () => {},
  hardDelete = () => {},
}) => {
  const [AllUsers, setAllUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(10); // Set users per page limit

  useEffect(() => {
    if (users) {
      setAllUsers(users);
    }
  }, [users]);

  // Get the current page users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = AllUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(AllUsers.length / usersPerPage);

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>Status</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Country</th>
            <th>Is Verified</th>
            <th>Edit</th>
            <th>Lock</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <StyledTableCell>
                <StatusIndicatorDiv status={!user.isLocked} />
              </StyledTableCell>
              <StyledTableCell>{user.id}</StyledTableCell>
              <StyledTableCell>
                {user.firstName} {user.lastName}
              </StyledTableCell>
              <StyledTableCell>{user.email}</StyledTableCell>
              <StyledTableCell>{user.phoneNumber}</StyledTableCell>
              <StyledTableCell>{user.dateOfBirth}</StyledTableCell>
              <StyledTableCell>{user.country}</StyledTableCell>
              <StyledTableCell>
                {user.isVerified ? "Yes" : "No"}
              </StyledTableCell>

              <StyledTableCell>
                <Link href={`/admin/editUser?id=${user.id}`}>Edit</Link>
              </StyledTableCell>

              <StyledTableCell>
                <Button
                  type="button"
                  onClick={() => softDelete?.(user.id, 1)}
                  style={{
                    backgroundColor: "#2ECC71",
                    color: "white",
                    marginInline: "2px",
                  }}
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  onClick={() => softDelete?.(user.id, 0)}
                  style={{
                    backgroundColor: "#E74C3C",
                    color: "white",
                    marginInline: "2px",
                  }}
                >
                  No
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <Button
                  type="button"
                  onClick={() => hardDelete?.(user.id, 0)}
                  style={{
                    backgroundColor: "#E74C3C",
                    color: "white",
                    marginInline: "2px",
                  }}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Pagination controls */}
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="outlined"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outlined"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserTable;
