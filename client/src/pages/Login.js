import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

export default function LogInForm() {
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [open, setOpen] = React.useState(false);
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      email: '',
      password: '',
    });
    handleClose()
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {error && (<p>Error</p> )}
      <Button variant="outlined" sx={{ color: '#E5AB24', backgroundColor: '#000009', marginInline: '5px'}} onClick={handleClickOpen}>
        Log in
      </Button>
      {data ? (
              <p>
                <Link to="/todo">back to the homepage.</Link>
              </p>
            ) : (
              <>
       <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            name='email'
            fullWidth
            onChange={handleInputChange}
            value={userFormData.email}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleFormSubmit}>Log in</Button>
        </DialogActions>
      </Dialog>
              </>
            )}
      
    </div>
  );
}