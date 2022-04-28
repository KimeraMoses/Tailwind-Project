import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { appointData, appointmentTableColumns } from "@constants";
import { MdOutlinePrint, MdOutlineRemoveRedEye } from "react-icons/md";
import image1 from "../../../../assets/team/margret.png";
import { ActionButton, ColumnHeader, UserName } from "./TableComponents";

export default function AppointmentTable() {
  return (
    <>
      <TableContainer component={Paper} className="my-6">
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              {appointmentTableColumns.map((col) => {
                return <ColumnHeader name={col.name} key={col.accessor} />;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {appointData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <UserName
                    name={row.name}
                    occupation={row.occupation}
                    image={image1}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.date}
                  <br />
                  <p className="text-xs font-normal text-primary">{row.time}</p>
                </TableCell>
                <TableCell align="center">{row.ctype}</TableCell>
                <TableCell align="center">${row.amount}.00</TableCell>
                <TableCell>
                  {" "}
                  <div
                    className={`px-2 py-1 rounded-md flex items-center justify-center font-medium ${
                      row.status === "Confirmed"
                        ? `bg-backgroundConfirmed`
                        : row.status === "Pending"
                        ? `bg-backgroundPending`
                        : row.status === "Canceled"
                        ? `border border-red text-red`
                        : `border boader-backgroundSuccess text-backgroundSuccess`
                    }`}
                  >
                    {row.status}
                  </div>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <ActionButton
                      label="View"
                      icon={<MdOutlineRemoveRedEye className="mr-1" />}
                      handleClick={() => console.log("View Btn Clicked")}
                    />
                    <ActionButton
                      label="Print"
                      icon={<MdOutlinePrint className="mr-1" />}
                      handleClick={() => console.log("Print Btn Clicked")}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
