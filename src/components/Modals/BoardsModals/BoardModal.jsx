import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
// import { BacksIconsList } from './BacksIconsList';
import defaultDark from 'assets/images/backs-small/1x/default-dark.jpg';
import defaultDarkRetina from 'assets/images/backs-small/2x/default-dark-2x.jpg';

export const BoardModal = titleBoard => {
  const [shownModal, setShownModal] = useState(false);

  // console.log(defaultImg);

  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Open Modal Board Base
      </button>
      {shownModal && (
        <ModalWrapper width="400px" onClose={() => setShownModal(false)}>
          <h3 style={{ color: 'white' }}>{titleBoard}</h3>
          <input type="text" placeholder="Title" />
          <p style={{ color: 'white' }}>Icons</p>
          <IconsList />
          <p style={{ color: 'white' }}>Background</p>
          {/* <BacksIconsList /> */}
          <img
            src={defaultDark}
            srcSet={`${defaultDarkRetina} 2x`}
            alt="default"
          />
        </ModalWrapper>
      )}
    </>
  );
};
