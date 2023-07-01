import React from 'react'
import AppShell from '../components/AppShell'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import { createEmployee } from '../services/employee';
import {Snackbar,Alert} from '@mui/material';


function CreateEmployee(props) {
  const [open, setOpen] = React.useState(false);

  const handleCreate = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      createEmployee({
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
          email: formData.get("email"),
      }).then(() => {
          setOpen(true);
          e.target.reset();
      }).catch(console.error);
  };

  const handleClose = () => {
      setOpen(false);
  };

  




  return (
    <>
      <AppShell>
        <div style={{ margin: "53px 0 40px 32px" }}>

          <form 
          onSubmit={handleCreate}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 16,
              gap: 16
            }}>
            <Link to="/">
              <Button variant="contained">GO BACK</Button>
            </Link>

            <h3 >FILL Employee Form</h3>
            <Divider />


            <TextField id="outlined-basic" label="Name *" variant="outlined" placeholder="Type name..." />

            <TextField id="outlined-basic" label="Username *" variant="outlined" placeholder="Type username..." />

            <TextField id="outlined-basic" label="Email *" variant="outlined" placeholder="Type Email..." />


            <Button variant="contained" type="submit">ADD EMPLOYEE</Button>
          </form>

        </div>

        <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Employeee Created successfully!!
                </Alert>
            </Snackbar>
      </AppShell>
    </>
  )
}

export default CreateEmployee
