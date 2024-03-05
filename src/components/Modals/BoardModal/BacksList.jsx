import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getBackgroundIcons } from '../../../redux/board/boardOperations';
import {
  selectBackgroundIcons,
  selectIsLoading,
} from '../../../redux/board/boardSelectors';
import DefaultBack from 'components/Icons/default.svg';
import {
  BacksUl,
  BackLi,
  BackLabel,
  BackInputRadio,
  BackImage,
} from './BoardModal.styled';

export const BacksList = () => {
  const [selectedBackId, setSelectedBackId] = useState(
    '65e717589898b0e904e16734'
  );
  const isLoading = useSelector(selectIsLoading);
  const backgroundIcons = useSelector(selectBackgroundIcons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBackgroundIcons());
  }, [dispatch]);

  const handleBackChange = id => {
    setSelectedBackId(id);
  };

  return isLoading ? (
    // <Loader />
    <p>Loading</p>
  ) : (
    <BacksUl>
      {backgroundIcons.map(item => {
        return (
          <BackLi key={item._id}>
            <BackLabel>
              <BackInputRadio
                type="radio"
                name="backgroundIcon"
                value={item._id}
                checked={selectedBackId === item._id}
                onChange={() => handleBackChange(item._id)}
              />
              <BackImage
                src={
                  item.backgroundMinURL ? item.backgroundMinURL : DefaultBack
                }
                srcSet={`${
                  item.backgroundMinURL ? item.backgroundMinURL : DefaultBack
                } 1x, ${item.backgroundMin2xURL} 2x`}
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

// import React, { useState } from 'react';
// import { backsArray } from './backsArray';

// import {
//   BacksUl,
//   BackLi,
//   BackLabel,
//   BackInputRadio,
//   BackImage,
// } from './BoardModal.styled';

// export const BacksList = () => {
//   const [selectedBackId, setSelectedBackId] = useState(0);

//   const handleBackChange = id => {
//     setSelectedBackId(id);
//   };

//   return (
//     <BacksUl>
//       {backsArray.map(item => {
//         return (
//           <BackLi key={item.id}>
//             <BackLabel>
//               <BackInputRadio
//                 type="radio"
//                 name="back"
//                 value={item.id}
//                 checked={selectedBackId === item.id}
//                 onChange={() => handleBackChange(item.id)}
//               />
//               <BackImage
//                 src={item.image}
//                 srcSet={`${item.image} 1x, ${item.retina} 2x`}
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
