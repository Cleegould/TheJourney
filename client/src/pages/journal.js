import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton, LinearProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import journeyLogo from "../images/journey.jpg";

import '../../src/assets/css/JournalEntry.css'

const JournalEntry = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const lastLoggedIn = "June 25, 2023"; // Placeholder value, replace with actual last login date
  const challengesCompleted = 10; // Placeholder value, replace with actual number
  const challengePercent = 0.5; // Placeholder value, replace with actual progress percentage as decimal (0 to 1)

  // Function to handle changes in the journal entry text
  const handleEntryChange = (event) => {
    setEntry(event.target.value);
  };

  // Function to handle saving the journal entry
  const handleSaveEntry = () => {
    // Get the current timestamp
    const timestamp = new Date().toLocaleString();

    // Save the journal entry and timestamp
    const newEntry = { entry, timestamp };
    setEntries([...entries, newEntry]);

    // Clear the journal entry text
    setEntry("");
  };

  // Function to handle deleting a journal entry
  const handleDeleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      padding={2}
      textAlign="center"
      bgcolor="#FE5720" /* Background color */
      color="#000009" /* Text color */
    > <img src={journeyLogo} alt="the journey logo"/>
     
      <Typography variant="h3" gutterBottom style={{ fontFamily: "Papyrus" }}>
        My Journal
      </Typography>
      
      <Box width={400}>
        <Typography variant="h5" gutterBottom style={{ fontFamily: "Papyrus" }}>
          Last Logged In: {lastLoggedIn}
        </Typography>
        <Typography variant="h5" gutterBottom style={{ fontFamily: "Papyrus" }}>
          Challenges Completed: {challengesCompleted}
        </Typography>
        Current Challenge Progress
        <LinearProgress
          className="progress-bar"
          variant="determinate"
          value={challengePercent * 100}
          style={{ backgroundColor: "#000009",}} /* Progress bar color */
        />
        <TextField
          label="Journal Entry"
          multiline
          rows={4}
          value={entry}
          onChange={handleEntryChange}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          onClick={handleSaveEntry}
          fullWidth
          style={{
            fontFamily: "Papyrus",
            backgroundColor: "#E5AB24", /* Button color */
            color: "#556062" /* Text color */
          }}
        >
          Save Entry
        </Button>
      </Box>
      <Box
        width={400}
        marginTop={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6" style={{ fontFamily: "Papyrus" }}>
          Journal Entries:
        </Typography>
        {entries.map((entry, index) => (
          <Box
            key={index}
            marginY={1}
            textAlign="center"
            display="flex"
            alignItems="center"
          >
            <Typography>{entry.entry}</Typography>
            <Typography variant="caption" marginLeft={1}>
              {entry.timestamp}
            </Typography>
            <IconButton
              color="error"
              onClick={() => handleDeleteEntry(index)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default JournalEntry;
