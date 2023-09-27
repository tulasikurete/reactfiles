import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, hexToRgb } from "@mui/material";
export default function Caluculator() {
  const inputs = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, ".", "+", "="],
  ];
  const [result, setResult] = useState("");
  const  handler= (event) => {
    const value = event.target.innerHTML;
    let newresult = result;
    if (value === "=") {
      newresult = eval(newresult);
    } else {
      newresult += value;
    }
    setResult(newresult);
  };
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>{result}</TableCell>
              <TableCell>CE</TableCell>
            </TableRow>
            {inputs.map((inputslabel) => (
              <TableRow>
                {inputslabel.map((input) => (
                  <TableCell onClick={handler}>{input}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
