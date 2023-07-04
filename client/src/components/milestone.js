import React, { useState } from 'react';

const MilestoneForm = ({ goalId, onMilestoneSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return; // You can add more validation if needed

    const milestoneData = {
      goalId,
      description,
    };

    onMilestoneSubmit(milestoneData); // Pass the milestone data to the parent component
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Milestone Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Milestone</button>
    </form>
  );
};

export default MilestoneForm;