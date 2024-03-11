import React, { useState } from 'react';
import sprite from 'assets/images/icons/icons-sprite.svg';
import { ICONS_ARRAY } from 'constants/index';
import { IconsUl, IconSVG, InputRadio } from './BoardModal.styled';

export const IconsList = ({ iconId }) => {
  const [selectedIconId, setSelectedIconId] = useState(iconId);

  const handleIconChange = id => {
    setSelectedIconId(id);
  };

  return (
    <IconsUl>
      {ICONS_ARRAY.map(item => {
        return (
          <li key={item.id}>
            <label>
              <InputRadio
                type="radio"
                name="iconId"
                value={selectedIconId}
                defaultChecked={selectedIconId === item.id}
                onChange={() => handleIconChange(item.id)}
              />
              <IconSVG width="18" height="18">
                <use xlinkHref={`${sprite}#${item.name}`} />
              </IconSVG>
            </label>
          </li>
        );
      })}
    </IconsUl>
  );
};
