import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import FormCalender from './FormCalender';
import '../assets/css/ChallengeForm.css'
import {useMutation} from '@apollo/client'
import { ADD_CHALLENGE} from '../utils/mutations'






export default function ChallengeForm() {
  const [challengeFormData, setChallengeFormData] = useState({ title: '', description: '',startDate:'' });
  const [addChallenge, { error, data }] = useMutation(ADD_CHALLENGE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setChallengeFormData({ ...challengeFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(challengeFormData);
    try {
      const { data } = await addChallenge({
        variables: { ...challengeFormData },
      });

      console.log(data);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setChallengeFormData({
      title: '',
      description: '',
    });
 
  };





  return (
    <div>
  
        <Card className='challenge-form'>
       <TextField
        sx={{paddingInline:'5px'}}   
           autoFocus
           margin="dense"
           label="Challenge name"
           type="text"
           name='title'
           value={challengeFormData.title}
           onChange={handleInputChange}
        //    variant="standard"
         />
           <TextField
        sx={{paddingInline:'5px'}}
         id="filled-multiline-static"
         label="Challenge Description"
         multiline
         rows={3}
         name='description'
         value={challengeFormData.description}
         onChange={handleInputChange}
         defaultValue="Default Value"
         variant="filled"
       />
       <FormCalender challengeFormData={challengeFormData} setChallengeFormData={setChallengeFormData} />
       <Button onClick={handleFormSubmit}>Start Challenge</Button>
        </Card>

    </div>
  );
}
