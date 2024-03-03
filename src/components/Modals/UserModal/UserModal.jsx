import React, { useState } from 'react';
import Eye from 'components/Icons/Eye';
import EyeCrossed from 'components/Icons/EyeCrossed';
import Plus from 'components/Icons/Plus';
import User from 'components/Icons/User';
import {
  AddPhoto,
  Avatar,
  EyeBtn,
  FormUser,
  Input,
  InputPass,
  InputUser,
  PlusButton,
  SendBtn,
} from './UserModal.styled';

const UserModal = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(null);

  function changeImg(event) {
    console.log(event.target.files);
    setImage(event.target.files[0]);
  }

  return (
    <div>
      <h3>Edit profile</h3>
      <FormUser>
        <Avatar>
          {image ? (
            <img src={image.name} alt="" /> //поки не працює
          ) : (
            <User
              width={68}
              height={68}
              strokeColor={'var( --svg-back-color-user)'}
              fillColor={'var(--svg-color-user)'}
            />
          )}
          <div>
            <PlusButton>
              <Plus
                width={20}
                height={20}
                strokeColor={'var(--sidebar-plus-icon)'}
              />
              <AddPhoto type="file" accept="image/*" onChange={changeImg} />
            </PlusButton>
          </div>
        </Avatar>
        <InputUser type="text" placeholder="Name" autoComplete={'username'} />
        <InputUser type="email" placeholder="Email" autoComplete={'username'} />
        <InputPass>
          <Input
            type={visible ? 'text' : 'password'}
            placeholder="Password"
            autoComplete={'current-password'}
          />
          <EyeBtn
            type="button"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? (
              <Eye
                width={20}
                height={20}
                fillColor={'none'}
                strokeColor={'var(--icon-stroke-color)'}
              />
            ) : (
              <EyeCrossed
                width={20}
                height={20}
                strokeColor={'var(--icon-stroke-color)'}
                fillColor={'none'}
              />
            )}
          </EyeBtn>
        </InputPass>
        <SendBtn type="submit">Send</SendBtn>
      </FormUser>
    </div>
  );
};

export default UserModal;
