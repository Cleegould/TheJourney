import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import auth from '../utils/auth';
import { ADD_USER} from '../utils/mutations'

export default function SingUpForm() {
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [open, setOpen] = React.useState(false);

  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
    handleClose()
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {error && (<div>Error</div> )}
      <Button variant="outlined"  sx={{ color: '#E5AB24', backgroundColor: '#000009', marginInline: '5px'}} onClick={handleClickOpen}>
        Sign Up
      </Button>
      {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/todo">back to the todo.</Link>
              </p>
            ) : (
              <>
            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User name"
            type="text"
            fullWidth
            name='username'
            variant="standard"
            onChange={handleInputChange}
            value={userFormData.username}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            name='password'
            variant="standard"
            onChange={handleInputChange}
            value={userFormData.password}
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleFormSubmit}>Sign Up</Button>
        </DialogActions>
      </Dialog>
        </>
            )}
  
    </div>
  );
} 