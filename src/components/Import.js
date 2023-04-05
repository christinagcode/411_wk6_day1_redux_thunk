import React from "react";

import { Button, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

const Import = (props) => {
  // fill out this component

  return (
    <>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <TableBody>
      <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Makes</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        {props.makes.map((make) => (
          <TableRow key={make.MakeId}>
            <TableCell>{make.MakeId}</TableCell>
            <TableCell>{make.MakeName}</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Import;
