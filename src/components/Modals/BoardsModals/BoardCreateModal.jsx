import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
import Plus from 'components/Icons/Plus';
// import { BacksIconsList } from './BacksIconsList';
// import defaultDark from 'assets/images/backs-small/1x/default-dark.jpg';
// import defaultDarkRetina from 'assets/images/backs-small/2x/default-dark-2x.jpg';

export const BoardCreateModal = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Open Modal Board Base
      </button>
      {shownModal && (
        <ModalWrapper width={350} onClose={() => setShownModal(false)}>
          <form>
            <h3 style={{ color: 'white' }}>New board</h3>
            <input type="text" placeholder="Title" />
            <p style={{ color: 'white' }}>Icons</p>
            <IconsList />
            <p style={{ color: 'white' }}>Background</p>
            {/* <BacksIconsList /> */}
            {/* <img
            src={defaultDark}
            srcSet={`${defaultDarkRetina} 2x`}
            alt="default"
          /> */}
            <button type="submit">
              <Plus
                width={14}
                height={14}
                fillColor={'#850606'}
                strokeColor={'green'}
              />{' '}
              Create
            </button>
          </form>
        </ModalWrapper>
      )}
    </>
  );
};
