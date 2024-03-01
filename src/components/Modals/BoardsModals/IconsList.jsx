import React, { useState } from 'react';

import sprite from 'assets/images/icons/icons-sprite.svg';
import { iconsdArray } from './IconsArr';

import {
  IconsUl,
  IconLi,
  IconLabel,
  IconSVG,
  InputRadio,
} from './BoardModals.styled';

export const IconsList = () => {
  const [selectedIconId, setSelectedIconId] = useState(0);

  const handleIconChange = id => {
    setSelectedIconId(id);
  };

  return (
    <IconsUl>
      {iconsdArray.map(item => {
        return (
          <IconLi key={item.id}>
            <IconLabel>
              <InputRadio
                type="radio"
                name="icon"
                value={item.id}
                checked={selectedIconId === item.id}
                onChange={() => handleIconChange(item.id)}
              />
              <IconSVG width="18" height="18">
                <use xlinkHref={`${sprite}#${item.name}`} />
              </IconSVG>
            </IconLabel>
          </IconLi>
        );
      })}
    </IconsUl>
  );
};
