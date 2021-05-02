import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles } from "@material-ui/core/styles";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ImageModal from './ImageModal'


import './App.css';


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



const PackageTable = ({packageNotifications, setRowAck}) => {

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
          {packageNotifications.map(row => (
			<TableRow key={row.id} style={{ textDecoration : row.ack ? 'line-through' : 'none', color: "red" }}>
              <StyledTableCell scope="row">
                {row.packageDetected}
              </StyledTableCell>
              <StyledTableCell align="right">{row.timeString}</StyledTableCell>
              <StyledTableCell align="right">
				  <ImageModal url={row.videoURL} id={row.id} setRowAck={setRowAck}/>
			  </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default PackageTable;