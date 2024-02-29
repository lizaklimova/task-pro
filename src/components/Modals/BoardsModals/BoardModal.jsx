import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

import FourCircles from 'components/icons/FourCircles';
import Star from 'components/icons/Star';
import Loading from 'components/icons/Loading';
import Puzzle from 'components/icons/Puzzle';
import Box from 'components/icons/Box';
import Lightning from 'components/icons/Lightning';
import ThreeCircles from 'components/icons/ThreeCircles';
import Hexagon from 'components/icons/Hexagon';

export const BoardModal = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Open Modal Board Base
      </button>
      {shownModal && (
        <ModalWrapper width="400px" onClose={() => setShownModal(false)}>
          <h3 style={{ color: 'white' }}>New board</h3>
          <input type="text" placeholder="Title" />
          <p style={{ color: 'white' }}>Icons</p>
          <ul>
            <li>
              <FourCircles
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
            <li>
              <Star
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
            <li>
              <Loading
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
            <li>
              <Puzzle
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
            <li>
              <Box
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
            <li>
              <Lightning
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
            <li>
              <ThreeCircles
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
            <li>
              <Hexagon
                width={28}
                height={28}
                fillColor={'#850606'}
                strokeColor={'yellow'}
              />
            </li>
          </ul>
          <p style={{ color: 'white' }}>Background</p>
        </ModalWrapper>
      )}
    </>
  );
};
