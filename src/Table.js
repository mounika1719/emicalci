import React from 'react'
import {Table,TableCell,TableRow, TableHead} from '@material-ui/core';
export default function Tables(props){
  return(
    <Table style={{width:'100%',border:'2px solid #ccc'}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="etable">Loan amount</TableCell>
          <TableCell className="etableVal">$ {props.amt}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className="etable">Interest %</TableCell>
          <TableCell className="etableVal">${props.inst}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className="etable">Tenure(Months)</TableCell>
          <TableCell className="etableVal">${props.duration}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className="etable">emi(Monthly)</TableCell>
          <TableCell className="etableVal">$ {props.emi}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className="etable">Total Interest</TableCell>
          <TableCell className="etableVal">$ {props.totalamtofIntr}</TableCell>
          </TableRow>
          <TableRow>
          <TableCell className="etable">Total Payment<br/>(Loan Amount+Interst</TableCell>
          <TableCell className="etableVal">$ {props.total ? props.total : 0}</TableCell>
          </TableRow>
          </TableHead>
          </Table>
  )
}