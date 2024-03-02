// import Bell from 'components/icons/Bell';
import User from 'components/Icons/User';
import React from 'react';
import { Button, UserContainer, UserName } from './Profile.styled';

const Profile = () => {
  return (
    <UserContainer>
      <UserName>Name</UserName>
      <Button type="button">
        <User
          width={68}
          height={68}
          strokeColor={'var(--svg-back-color)'}
          fillColor={'var(--svg-color)'}
        />
        {/* <img src="#" alt="" /> */}
      </Button>
    </UserContainer>
  );
};

export default Profile;
