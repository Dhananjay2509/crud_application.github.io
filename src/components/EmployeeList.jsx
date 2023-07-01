import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { getAllEmployees, deleteEmployeeById } from '../services/employee';

function EmployeeList(props) {

    const [employees, setEmployees] = useState([]);

    const loadEmployees = () => getAllEmployees().then(setEmployees).catch(console.error);

    React.useEffect(() => {
        loadEmployees();
    }, []);

    const deleteById = (id) => () => {
        deleteEmployeeById(id).then(() => {
            loadEmployees();
        }).catch(console.error)
    }


    return (
        <>
            <div style={{ margin: "38px 0 10px 16px" }}>
                <Link to="/create">
                    <Button variant="contained">CREATE EMPLOYEE</Button>
                </Link>
                <Divider sx={{ margin: "15px 0 15px 0" }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Username</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align='center'>
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.username}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">
                                        <Link to={`/${row.id}`}>
                                            <Button
                                                variant="contained"
                                                color='primary'
                                            >EDIT</Button>
                                        </Link>

                                        <Button
                                            variant="contained"
                                            color='error'
                                            onClick={deleteById(row.id)}
                                        >
                                            DELETE
                                        </Button>




                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default EmployeeList
