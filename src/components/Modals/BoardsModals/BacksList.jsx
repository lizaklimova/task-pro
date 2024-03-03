// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

// import { getBackgroundIcons } from '../../../redux/board/boardOperations';
// // import { getBackgroundIcons } from '../../redux/board/boardOperations';
// import { selectBackgroundIcons } from '../../../redux/board/boardSelectors';

// import {
//   BacksUl,
//   BackLi,
//   BackLabel,
//   BackInputRadio,
//   BackImage,
// } from './BoardModals.styled';
// import axios from 'axios';

// export const BacksList = () => {
//   const [selectedBackId, setSelectedBackId] = useState(0);
//   const backgroundIcons = useSelector(selectBackgroundIcons);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     // axios
//     //   .get('http://localhost:5050/api/backgrounds/')
//     //   .then(data => console.log(data));

//     dispatch(getBackgroundIcons());
//   }, [dispatch]);

//   const handleBackChange = id => {
//     setSelectedBackId(id);
//   };
//   console.log(backgroundIcons);

//   return (
//     <BacksUl>
//       {backgroundIcons.map(item => {
//         return (
//           <BackLi key={item._id}>
//             <BackLabel>
//               <BackInputRadio
//                 type="radio"
//                 name="back"
//                 value={item.id}
//                 checked={selectedBackId === item.id}
//                 onChange={() => handleBackChange(item.id)}
//               />
//               <BackImage
//                 src={item.backgroundMinURL}
//                 srcSet={`${item.backgroundMinURL} 1x, ${item.backgroundMin2xURL} 2x`}
//                 alt="background miniature"
//                 width={28}
//                 height={28}
//               />
//             </BackLabel>
//           </BackLi>
//         );
//       })}
//     </BacksUl>
//   );
// };

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
                srcSet={`${item.image} 1x, ${item.retina} 2x`}
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
