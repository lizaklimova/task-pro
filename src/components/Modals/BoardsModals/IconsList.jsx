// import { iconsBoardArray } from './IconsArr';

import sprite from 'assets/images/icons-svg/icons-sprite.svg';
import { iconsdArray } from './IconsArr';

import { IconsUL, InputRadio } from './BoardModals.styled';

export const IconsList = () => {
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
                checked={item.id === 1}
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

// import FourCircles from 'components/icons/FourCircles';
// import Star from 'components/icons/Star';
// import Loading from 'components/icons/Loading';
// import Puzzle from 'components/icons/Puzzle';
// import Box from 'components/icons/Box';
// import Lightning from 'components/icons/Lightning';
// import ThreeCircles from 'components/icons/ThreeCircles';
// import Hexagon from 'components/icons/Hexagon';

// // import { IconsUL } from './BoardModals.styled';

// export const IconsList = () => {
//   const clickHandler = evt => {
//     console.log(evt.target.nodeName);
//     if (evt.target.nodeName !== 'BUTTON' || evt.target.nodeName !== 'svg') {
//       return;
//     }
//     console.log(evt.target.nodeName);
//   };

//   return (
//     <div onClick={clickHandler}>
//       <button type="button">
//         <FourCircles
//           width={18}
//           height={18}
//           fillColor={'none'}
//           strokeColor={'green'}
//         />
//       </button>

//       <button type="button">
//         <Star width={18} height={18} fillColor={'none'} strokeColor={'green'} />
//       </button>
//       <button type="button">
//         <Loading
//           width={18}
//           height={18}
//           fillColor={'none'}
//           strokeColor={'green'}
//         />
//       </button>
//       <button type="button">
//         <Puzzle
//           width={18}
//           height={18}
//           fillColor={'none'}
//           strokeColor={'green'}
//         />
//       </button>
//       <button type="button">
//         <Box width={18} height={18} fillColor={'none'} strokeColor={'green'} />
//       </button>
//       <button type="button">
//         <Lightning
//           width={18}
//           height={18}
//           fillColor={'none'}
//           strokeColor={'green'}
//         />
//       </button>
//       <button type="button">
//         <ThreeCircles
//           width={18}
//           height={18}
//           fillColor={'none'}
//           strokeColor={'green'}
//         />
//       </button>
//       <button type="button">
//         <Hexagon
//           width={18}
//           height={18}
//           fillColor={'none'}
//           strokeColor={'green'}
//         />
//       </button>
//     </div>
//   );
// };

// import React, { useState } from 'react';
