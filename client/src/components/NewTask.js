import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const NewTask = () => {
    const [taskFormData, setTaskFormData] = useState({
      task: '',
      description: '',
      frequency: 0,
    });

    const handleChange = (e) => {
      // console.log(e);
      setTaskFormData({ ...taskFormData, [e.target.name]: e.target.value });
    };

    const frequencyChange = (e) => {
      setTaskFormData({ ...taskFormData, frequency: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(taskFormData)
      // Send Task to the back end

      setTaskFormData({
        task: '',
        description: '',
        frequency: 0,
      })
    };

    const [open, setOpen] = React.useState(false);

    const inputStyles ={
      margin: 'auto',
      width: '90%',
      marginBottom: '10px'
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

  return (
    <div className='taskForm'>
      <form onSubmit={handleSubmit}>
      <div>
        <TextField
        sx={inputStyles}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <TextField
          label="Task"
          placeholder="Placeholder"
          multiline
          variant="filled"
          type="text"
          id="Task"
          name="task"
          value={taskFormData.task}
          onChange={handleChange}
          required
        />
        </Grid>
        <Grid item xs={10}>
        <TextField
          sx={inputStyles}
          label="Description"
          multiline
          rows={4}
          variant="filled"
          id="description"
          name="description"
          value={taskFormData.description}
          onChange={handleChange}
          required
        />
        </Grid>
      </Grid>
      </Box>
      {/* drop down menu */}
      <div  >
        <FormControl sx={{ m: 1, width: '90%' }}>
        <InputLabel id="dropDownFrequency">Frequency</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            name='frequency'
            value={taskFormData.frequency}
            label="frequency"
            onChange={frequencyChange}
          >
            <MenuItem value={1}>Daily</MenuItem>
            <MenuItem value={2}>Every Other Day</MenuItem>
            <MenuItem value={3}>Every Third Day</MenuItem>
            <MenuItem value={4}>Every Fourth Day</MenuItem>
            <MenuItem value={5}>Every Fifth Day</MenuItem>
            <MenuItem value={6}>Every Sixth Day</MenuItem>
            <MenuItem value={7}>Once a Week</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button  sx={{ marginBottom: '10px'}} type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>
    </form>
    </div>
  )
}

export default NewTask;