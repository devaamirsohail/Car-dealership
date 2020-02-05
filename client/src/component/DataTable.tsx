import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface CarData {
  _id: String;
  make: String;
  year: Number;
  color: String;
  price: Number;
  hasSunroof: Boolean;
  isFourWheelDrive: Boolean;
  hasLowMiles: Boolean;
  hasPowerWindows: Boolean;
  hasNavigation: Boolean;
  hasHeatedSeats: Boolean;
}
interface Props {
  carData: CarData[];
}

const DataTable: React.FC<Props> = ({ carData }) => {
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
      },
      body: {
        fontSize: 14
      }
    })
  )(TableCell);

  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.background.default
        }
      }
    })
  )(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700
    }
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company Name</StyledTableCell>
            <StyledTableCell align="left">Color</StyledTableCell>
            <StyledTableCell align="left">Model</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carData.map((value: any) => (
            <StyledTableRow key={value._id}>
              <StyledTableCell align="left">{value.make}</StyledTableCell>
              <StyledTableCell align="left">{value.color}</StyledTableCell>
              <StyledTableCell align="left">{value.year}</StyledTableCell>
              <StyledTableCell align="left">{value.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
