import ModalWrapper from 'components/Modals/ModalWrapper/ModalWrapper';
import developers from './developers_info.json';

import SwiperElement from './Swiper';

const SwiperDevModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <ModalWrapper
          onClose={() => {
            onClose();
          }}
          developers
        >
          <SwiperElement developers={developers.developers} />
        </ModalWrapper>
      )}
    </>
  );
};

export default SwiperDevModal;
