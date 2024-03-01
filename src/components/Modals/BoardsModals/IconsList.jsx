import React, { useState } from 'react';

import sprite from 'assets/images/icons/icons-sprite.svg';
import { iconsdArray } from './IconsArr';

import { IconsUL, InputRadio } from './BoardModals.styled';

export const IconsList = () => {
  const [selectedIconId, setSelectedIconId] = useState(0);

  const handleIconChange = id => {
    setSelectedIconId(id);
  };

  return (
    <IconsUL>
      {iconsdArray.map(item => {
        return (
          <li key={item.id}>
            <label>
              <InputRadio
                type="radio"
                name="icon"
                value={item.id}
                checked={selectedIconId === item.id}
                onChange={() => handleIconChange(item.id)}
              />
              <svg width="18" height="18" style={{ stroke: 'aliceblue' }}>
                <use xlinkHref={`${sprite}#${item.name}`} />
              </svg>
            </label>
          </li>
        );
      })}
    </IconsUL>
  );
};
