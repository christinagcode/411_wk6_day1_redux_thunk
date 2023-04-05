import React from "react";
import {
  Button,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Table,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";

const Import = (props) => {
  // fill out this component

  return (
    <>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <h2>COUNT: {props.makes.length}</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Makes</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, index) => (
            <TableRow key={make.MakeId}>
              <TableCell>{make.MakeId}</TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell>
                {console.log(make)}
                <IconButton
                  onClick={() => {
                    console.log("clickkkkkk");
                    props.deleteMake(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Import;
