import React, { useState } from 'react';
import UserDefault from 'components/Icons/UserDefault';
import ModalWrapper from 'components/Modals/ModalWrapper';
import UserModal from 'components/Modals/UserModal/UserModal';
import { Button, UserContainer, UserName } from './Profile.styled';

const Profile = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <UserContainer>
      <UserName>Name</UserName>
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
