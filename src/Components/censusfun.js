import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  Table,
  TableRow,
} from "@mui/material";
export default function Census() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [id, setId] = useState("");

  const [details, setDetails] = useState([]);
  const submit = () => {
    const list = { name, dob, id };

    setDetails([...details, list]);
  };
  return (
    <div>
      <Box
        sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
      >
        <Box
          sx={{
            margin: "20px",
            padding: `50px`,
            "& > :not(style)": { m: 1 },
            background: `pink`,
            maxWidth: 250,
          }}
        >
          {" "}
          <h3>REGISTRATION FORM</h3>
          <Grid container>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  style={{ backgroundColor: "lightblue" }}
                  onChange={(event) => setName(event.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="my-input">DOB</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  style={{ backgroundColor: "lightblue" }}
                  onChange={(event) => setDob(event.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="my-input">ID</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  style={{ backgroundColor: "lightblue" }}
                  onChange={(event) => setId(event.target.value)}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Button variant="contained" onClick={submit}>
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 925,
                background: `gray`,
                width: 20,
                height: 20,
              }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell> NAME</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {details.map(({ name, dob, id }, i) => (
                  <TableRow key={id + i}>
                    <TableCell>{name}</TableCell>

                    <TableCell>{dob}</TableCell>
                    <TableCell>{id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
}
