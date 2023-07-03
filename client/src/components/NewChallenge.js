import React, {useState} from 'react';
import milestone from './milestone';

const NewChallenge = () => {
    const [goalData, setGoalData] = useState({
      goal: '',
      description: '',
      milestones: [],
      frequency: 0,
      startDay: new Date().toLocaleDateString(),
      isCompleat: false,
    });

    const setFrequency = ['Daily', 'Every Other Day', 'Every Third Day', 'Every Fourth Day', 'Every Fifth Day']
  
    const { goal, description, milestones, frequency, startDay, isCompleat } = goalData;
    let useFrequency = frequency;
  
    const handleChange = (e) => {
      setGoalData({ ...goalData, [e.target.name]: e.target.value });
    };

    const handleOptionChange = (e) => {
      let newFrequency = e
      setGoalData(frequency = newFrequency)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send goal to the back end
    };
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className=''>
        <label htmlFor="goal">Goal</label>
        <input
          type="text"
          id="goal"
          name="goal"
          value={goal}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
          required
        />
      </div>
      <div htmlFor='frequency'>
          <label for="options">Select an option:</label>
          <select id="options" value={useFrequency} onChange={handleOptionChange (useFrequency)}>
          <option value="">Select an option</option>
          {setFrequency.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <p>Selected option: {useFrequency}</p>
      </div>
      <div>
        <label htmlFor='milestones'>Milestone</label>
        <button>Add Milestone</button>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default NewChallenge;
