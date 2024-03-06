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
import { selectUsername, selectUserEmail, selectUserAvatar } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../redux/auth/authOperations';

const UserModal = () => {
const dispatch = useDispatch();

  const data = useSelector(selectUsername);
  
    console.log(data);

  const [visible, setVisible] = useState(false);
  // const [state, setState] = useState({});
  const [avatar_url, setAvatar_url] = useState(useSelector(selectUserAvatar)); //те що приходить з беку
  const [name, setName] = useState(useSelector(selectUsername)); //те що приходить з беку
  const [email, setEmail] = useState(useSelector(selectUserEmail)); //те що приходить з беку
  const [password, setPassword] = useState(''); 
    

  function changeImg(event) {
    console.log(event.target.files);
    setAvatar_url(event.target.files[0]);
  }
     const handleInputChange = event => {
         const { name, value } = event.target;
         switch (name) {
           case 'name':
             setName(value);
             break;
           case 'email':
             setEmail(value);
             break;
           case 'password':
             setPassword(value);
             break;
           default:
             break;
         }
       
       
     };

    function editProfile(event) {
      event.preventDefault();
      // setState({
      //   ...state,
      //   image,
      //   name,
      //   email,
      //   password,
      // });
      // console.log(state);
      dispatch(editUser({ avatar_url, name, email, password }));
    }
    // console.log(state);
    // console.log(image);

  return (
    <div>
      <h3>Edit profile</h3>
      <FormUser onSubmit={editProfile}>
        <Avatar>
          {avatar_url !== 'default' ? (
            <img src={avatar_url} alt="" /> //поки не працює
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
        <InputUser
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          autoComplete={'username'}
          onChange={handleInputChange}
        />
        <InputUser
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          autoComplete={'username'}
          onChange={handleInputChange}
        />
        <InputPass>
          <Input
            type={visible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            name="password"
            autoComplete={'current-password'}
            onChange={handleInputChange}
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
