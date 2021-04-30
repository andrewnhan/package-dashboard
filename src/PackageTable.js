import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles } from "@material-ui/core/styles";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './App.css';

import {fromUnixTime, format} from 'date-fns'


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 12,
	color: theme.palette.common.white
  },

}))(TableCell);



function createData(packageDetected, time, videoURL) {
  const date = fromUnixTime(time)
  const timeString = format(date, 'HH:mm:ss MM/dd/yyyy')
  console.log(timeString)
  return { packageDetected, timeString, videoURL };
}


const rows = [
  createData('Detected!', 1619735043, "test1"),
  createData('Detected!', 1619734323, "test2"),
  createData('Detected!', 1615452443, "test3"),
  createData('Detected!', 1615452443, "test3"),
];

const PackageTable = () => {
  return (
    <Paper style={{ paddingTop: 20, height: '100%' }} elevation={2}>
      <Table className="Package-table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell color="white">Package Detection Status</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Video</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.videoURL}>
              <StyledTableCell scope="row">
                {row.packageDetected}
              </StyledTableCell>
              <StyledTableCell align="right">{row.timeString}</StyledTableCell>
              <StyledTableCell align="right">{row.videoURL}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default PackageTable;