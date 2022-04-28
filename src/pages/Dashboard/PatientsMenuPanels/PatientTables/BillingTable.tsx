import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { billingData } from "@constants";
import { MdOutlinePrint, MdOutlineRemoveRedEye } from "react-icons/md";
import image1 from "../../../../assets/team/margret.png";
import { ActionButton, ColumnHeader, UserName } from "./TableComponents";
import { billingTableColumns } from "./../../../../constants/tableConstant";

export default function BillingTable() {
  return (
    <>
      <TableContainer component={Paper} className="my-6">
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              {billingTableColumns.map((col) => {
                return <ColumnHeader name={col.name} key={col.accessor} />;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {billingData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  <UserName
                    name={row.name}
                    occupation={row.occupation}
                    image={image1}
                  />
                </TableCell>
                <TableCell>${row.amount}.00</TableCell>
                <TableCell>{row.date}</TableCell>
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
