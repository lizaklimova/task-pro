import React, { useState } from 'react';

import { backsArray } from './backsArray';

import {
  BacksUl,
  BackLi,
  BackLabel,
  BackInputRadio,
  BackImage,
} from './BoardModals.styled';

export const BacksList = () => {
  const [selectedBackId, setSelectedBackId] = useState(0);

  const handleBackChange = id => {
    setSelectedBackId(id);
  };

  return (
    <BacksUl>
      {backsArray.map(item => {
        return (
          <BackLi key={item.id}>
            <BackLabel>
              <BackInputRadio
                type="radio"
                name="back"
                value={item.id}
                checked={selectedBackId === item.id}
                onChange={() => handleBackChange(item.id)}
              />
              <BackImage
                src={item.image}
                srcset={`${item.image} 1x, ${item.retina} 2x`}
                alt="background miniature"
                width={28}
                height={28}
              />
            </BackLabel>
          </BackLi>
        );
      })}
    </BacksUl>
  );
};
