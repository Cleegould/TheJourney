import React from 'react';
import ProfileForm from './ProfileForm';

const ProfileCreationPage = () => {
  const handleProfileSubmit = (profile) => {
    console.log(profile); // Send profile to the back end
  };

  return (
    <div>
      <h1>Create Profile</h1>
      <ProfileForm onProfileSubmit={handleProfileSubmit} />
    </div>
  );
};

export default ProfileCreationPage;