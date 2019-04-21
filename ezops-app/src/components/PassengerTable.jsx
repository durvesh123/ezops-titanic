import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PassengerTable extends React.PureComponent {

    render() {
        return (
            <Paper >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Passenger ID</TableCell>
                            <TableCell >Passenger Name</TableCell>
                            <TableCell >Survived</TableCell>
                            <TableCell >Passenger Class</TableCell>
                            <TableCell >Sex</TableCell>
                            <TableCell >Age</TableCell>
                            <TableCell >SibSp</TableCell>
                            <TableCell >Parch</TableCell>
                            <TableCell >Ticket</TableCell>
                            <TableCell >Cabin</TableCell>
                            <TableCell >Embarked</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.items.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.passengerid}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.survived}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.passenger_class}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.sex}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.age}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.sibsp}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.parch}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.ticket}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.cabin}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.embarked}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

}
export default PassengerTable;