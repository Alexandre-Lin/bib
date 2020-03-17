import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Quick.css';


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
            this.setState({data: json});

        }));
    }


    render() {
        return (
            <TableContainer component={Paper}>
                <h1>List of restaurants with Maître Restaurateur and Bib Gourmand distinctions</h1>
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
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.new_names}
                                </TableCell>
                                <TableCell align="right">{row.new_owners}</TableCell>
                                <TableCell align="right">{row.new_locations}</TableCell>
                                <TableCell align="right">{row.new_kitchens}</TableCell>
                                <TableCell align="right"><img class="img" src={row.new_images} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

}
