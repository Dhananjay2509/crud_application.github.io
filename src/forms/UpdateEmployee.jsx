import React, { useEffect, useState } from 'react'
import AppShell from '../components/AppShell'
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getEmployeeById, updateEmployeeById } from '../services/employee';
import { Alert, Snackbar } from '@mui/material';


function UpdateEmployee(props) {
  const { id } = useParams();
  const [employee, setEmployees] = useState();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getEmployeeById(id).then(setEmployees).catch(console.error);
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    updateEmployeeById(id, {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email")
    }).then(() => {
      setOpen(true);
      e.target.reset();
    }).catch(console.error)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppShell>
        {employee ? (
          <div style={{ margin: "53px 0 40px 32px" }}>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 16,
                gap: 16
              }}>
              <Link to="/">
                <Button variant="contained">GO BACK</Button>
              </Link>

              <h3 >Edit Employee Form</h3>
              <Divider />


              <TextField name="name" id="outlined-basic" label="Name *" variant="outlined" placeholder="Type name..." defaultValue={employee?.name} />

              <TextField name='username' id="outlined-basic" label="Username *" variant="outlined" placeholder="Type username..." defaultValue={employee?.username} />

              <TextField name='email' id="outlined-basic" label="Email *" variant="outlined" placeholder="Type Email..." defaultValue={employee?.email} />


              <Button variant="contained" type="submit" >UPDATE EMPLOYEE</Button>
            </form>

          </div>
        ) : (
        <CircularProgress />
        )}
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Employeee updated successfully!!
          </Alert>
        </Snackbar>
      </AppShell>

    </>
  )
}

export default UpdateEmployee
