import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { format } from "date-fns";
import DeleteIcon from "@mui/icons-material/Delete";

const JournalEntry = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Function to handle changes in the journal entry text
  const handleEntryChange = (event) => {
    setEntry(event.target.value);
  };

  // Function to handle saving the journal entry
  const handleSaveEntry = () => {
    // Get the current timestamp
    const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    // Save the journal entry and timestamp
    const newEntry = { entry, timestamp };
    setEntries([...entries, newEntry]);

    // Clear the journal entry text
    setEntry("");
  };

  // Function to handle deleting a journal entry
  const handleDeleteEntry = (index) => {
    setDeleteIndex(index);
    setIsDeleteDialogOpen(true);
  };

  // Function to confirm the deletion of a journal entry
  const confirmDeleteEntry = () => {
    const updatedEntries = [...entries];
    updatedEntries.splice(deleteIndex, 1);
    setEntries(updatedEntries);
    setDeleteIndex(null);
    setIsDeleteDialogOpen(false);
  };

  // Function to cancel the deletion of a journal entry
  const cancelDeleteEntry = () => {
    setDeleteIndex(null);
    setIsDeleteDialogOpen(false);
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
    >
      <Typography variant="h4" gutterBottom>
        My Journal
      </Typography>
      <Box width={400}>
        <TextField
          label="Journal Entry"
          multiline
          rows={4}
          value={entry}
          onChange={handleEntryChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" onClick={handleSaveEntry} fullWidth>
          Save
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
        <Typography variant="h6">Journal Entries:</Typography>
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
      <Dialog
        open={isDeleteDialogOpen}
        onClose={cancelDeleteEntry}
        maxWidth="xs"
      >
        <DialogTitle>Delete Journal Entry</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this journal entry?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDeleteEntry}>Cancel</Button>
          <Button onClick={confirmDeleteEntry} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default JournalEntry;
