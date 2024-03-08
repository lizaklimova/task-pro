import React, { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper';
import UserModal from 'components/Modals/UserModal/UserModal';
import { Button, UserContainer, UserName } from './Profile.styled';
import UserDefault from 'components/Icons/UserDefault';
import { useSelector } from 'react-redux';
import {
  selectUserAvatar,
  selectUsername,
  selectIsLoading,
} from '../../redux/auth/authSelectors';

const Profile = () => {
  const [shownModal, setShownModal] = useState(false);
  const nameUser = useSelector(selectUsername);
  const avatar = useSelector(selectUserAvatar);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {!isLoading && (
        <UserContainer>
          <UserName>{nameUser ?? 'User'}</UserName>
          <Button type="button" onClick={() => setShownModal(true)}>
            {avatar !== 'default' ? (
              <img src={avatar} alt="" />
            ) : (
              <UserDefault
                width={68}
                height={68}
                strokeColor={'var( --svg-back-color-user)'}
                fillColor={'var(--svg-color-user)'}
              />
            )}
          </Button>
          {shownModal && (
            <ModalWrapper width={400} onClose={() => setShownModal(false)}>
              <UserModal onClose={() => setShownModal(false)} />
            </ModalWrapper>
          )}
        </UserContainer>
      )}
    </>
  );
};

export default Profile;
