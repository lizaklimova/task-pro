import React, { useState } from 'react';
// import { useAuth } from 'hooks';
import ModalWrapper from 'components/Modals/ModalWrapper';
import UserModal from 'components/Modals/UserModal/UserModal';
import { Button, UserContainer, UserName } from './Profile.styled';
import UserDefault from 'components/Icons/UserDefault';
import { useSelector } from 'react-redux';
import { selectUsername } from '../../redux/auth/authSelectors';

const Profile = () => {
  const [shownModal, setShownModal] = useState(false);
  const nameUser = useSelector(selectUsername);
  // const { username } = useAuth();

  return (
    <UserContainer>
      <UserName>{nameUser ?? 'User'}</UserName>
      <Button type="button" onClick={() => setShownModal(true)}>
        <UserDefault
          width={68}
          height={68}
          strokeColor={'var( --svg-back-color-user)'}
          fillColor={'var(--svg-color-user)'}
        />
        {/* <img src="#" alt="" /> */}
      </Button>
      {shownModal && (
        <ModalWrapper width={400} onClose={() => setShownModal(false)}>
          <UserModal />
        </ModalWrapper>
      )}
    </UserContainer>
  );
};

export default Profile;
