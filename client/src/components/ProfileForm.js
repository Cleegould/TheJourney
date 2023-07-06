import React, {useState} from 'react'
// import NewChallenge from './NewChallenge'

const ProfileForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      // Validate the form data
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // Create the profile object
      const profile = {
        name,
        email,
        password
      };

      // Reset the form
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      return profile;
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email: 
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password: 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Confirm Password: 
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Profile</button>
      </form>
    );
};

export default ProfileForm;