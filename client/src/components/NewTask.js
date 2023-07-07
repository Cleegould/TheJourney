import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const NewTask = () => {
    const [taskData, setTaskData] = useState({
      task: '',
      description: '',
      frequency: 0,
      startDay: new Date().toLocaleDateString(),
      isCompleat: false,
    });

    const handleChange = (e) => {
      setTaskData({ ...taskData, [e.target.name]: e.target.value });
    };

    const frequencyChange = (e) => {
      setTaskData({ ...taskData, frequency: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(taskData)
      // Send Task to the back end
    };

    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Task"
          placeholder="Placeholder"
          multiline
          variant="filled"
          type="text"
          id="Task"
          name="Task"
          value={taskData.Task}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="filled"
          id="description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          required
        />
      </div>
      {/* drop down menu */}
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="dropDownFrequency">Frequency</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={taskData.frequency}
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
      <Button type="submit" variant="contained" onClick={handleSubmit}>Submit</Button>
    </form>
    </div>
  )
}

export default NewTask;