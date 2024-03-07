import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import sprite from 'assets/images/icons/icons-sprite.svg';
import { getBackgroundIcons } from '../../../redux/board/boardOperations';
import SmallLoader from 'components/Loader/SmallLoader';
import {
  selectBackgroundIcons,
  selectIsLoading,
} from '../../../redux/board/boardSelectors';
import {
  BacksUl,
  BackLi,
  BackLabel,
  DefaultImgWrap,
  BackInputRadio,
  BackImage,
  SmallLoaderContainer,
} from './BoardModal.styled';

export const BacksList = ({ backgroundId }) => {
  const [selectedBackId, setSelectedBackId] = useState(backgroundId);
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
    <SmallLoaderContainer>
      <SmallLoader width="20" height="20" />
    </SmallLoaderContainer>
  ) : (
    <BacksUl>
      {backgroundIcons.map(item => {
        return (
          <BackLi
            key={item._id}
            id={item.backgroundMinURL ? '' : 'default-bg-img'}
          >
            <BackLabel>
              <BackInputRadio
                type="radio"
                name="background"
                value={item._id}
                defaultChecked={selectedBackId === item._id}
                onChange={() => handleBackChange(item._id)}
              />
              {item.backgroundMinURL ? (
                <BackImage
                  src={item.backgroundMinURL}
                  srcSet={`${item.backgroundMinURL} 1x, ${item.backgroundMin2xURL} 2x`}
                  alt="background miniature"
                  width={28}
                  height={28}
                />
              ) : (
                <DefaultImgWrap>
                  <svg width={16} height={16}>
                    <use href={`${sprite}#icon-default-bg`}></use>
                  </svg>
                </DefaultImgWrap>
              )}
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
