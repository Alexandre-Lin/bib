import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

async function loadingData() {

    await fetch('http://localhost:8080/', {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json().then(json => {
        console.log(json);
    }));
}

export default class Quick extends React.Component {
    constructor() {
        super()
        this.state = {data: []}
        this.fetching();
    }

    fetching() {
        fetch('http://localhost:8080/', {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }).then(res => res.json().then(json => {
            console.log(this.state.data);
            this.setState({data: json});

        }));
    }


    render() {
        console.log(this.state.data);
        return (
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Owner</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Kitchen style</TableCell>
                            <TableCell align="right">View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map(row => (
                            <TableRow key={row.owners}>
                                <TableCell component="th" scope="row">
                                    {row.new_names}
                                </TableCell>
                                <TableCell align="right">{row.new_owners}</TableCell>
                                <TableCell align="right">{row.new_locations}</TableCell>
                                <TableCell align="right">{row.new_kitchens}</TableCell>
                                <TableCell align="right">{row.new_images}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

}
