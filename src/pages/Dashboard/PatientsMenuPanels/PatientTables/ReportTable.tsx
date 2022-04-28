import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { reportData, reportTableColumns } from "@constants";
import { MdOutlinePrint, MdOutlineRemoveRedEye } from "react-icons/md";

export default function ReportsTable() {
  return (
    <>
      <TableContainer component={Paper} className="my-6">
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              {reportTableColumns.map((col) => {
                return (
                  <th
                    key={col.accessor}
                    className="text-xl font-semibold text-left p-4 border-b border-backgroundGray"
                  >
                    {col.name}
                  </th>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {reportData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.name}
                  <br />
                  <p className="text-xs font-normal">{row.occupation}</p>
                </TableCell>
                <TableCell>{row.attachment}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <div className="rounded-md flex items-center bg-backgroundActionBtn text-xs px-2 py-1 cursor-pointer font-medium text-primary select-none">
                      <MdOutlineRemoveRedEye className="mr-1" />
                      View
                    </div>
                    <div className="rounded-md flex items-center bg-backgroundActionBtn text-xs px-2 cursor-pointer py-1 font-medium text-primary select-none">
                      <MdOutlinePrint className="mr-1" />
                      Print
                    </div>
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
