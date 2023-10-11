// type tableprops = {
//     data: any[];
//     col: any[];
// }
// function Table(props: tableprops) {
//     return (
//         <>
//             <table border={1} cellPadding={10}> 
//                 <thead>
//                     <tr>
//                         {props.col.map((x, i) => (
//                             <th>{x.heading}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.data.map((x, i) => (
//                         <tr>
//                             {props.col.map((item, i) => (
//                                 <td>{x[item.key]}</td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     )
// }
// export default Table;
import React from "react";
import { styled } from "@mui/system";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

const StyledTable = styled(Table)({
  minWidth: 650,
  backgroundColor: "#f0f0f0",
});

type tableprops = {
    data: any[];
    col: any[];
}
const BoldTableCell = styled(TableCell)({
  fontWeight: "bold",
});
const Tablee = (props: tableprops) => {
  return (
    <Paper>
      <StyledTable>
        <TableHead>
          <TableRow>
            {props.col.map((x, i) => (
              <BoldTableCell key={i}>{x.heading}</BoldTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((x, i) => (
            <TableRow key={i}>
              {props.col.map((item, i) => (
                <TableCell key={i}>{x[item.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Paper>
  );
};

export default Tablee;
