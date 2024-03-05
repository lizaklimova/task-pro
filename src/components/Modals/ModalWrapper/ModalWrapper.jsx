import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  CLOSE_KEY_CODE,
  BACKDROP_TRANSITION,
  MODAL_TRANSITION,
} from 'constants';
import Close from 'components/Icons/Close';
import {
  ModalBackdrop,
  ModalCloseButton,
  ModalContainer,
} from './ModalWrapper.styled';

const ModalWrapper = ({ children, width, onClose, developers = false }) => {
  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === CLOSE_KEY_CODE) onClose();
    };

    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <ModalBackdrop
      initial={'initial'}
      animate={'isOpen'}
      exit={'exit'}
      variants={BACKDROP_TRANSITION}
      onClick={onClose}
    >
      <ModalContainer
        variants={MODAL_TRANSITION}
        $containerWidth={width}
        $developers={developers}
        onClick={event => event.stopPropagation()}
      >
        <ModalCloseButton
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          <Close
            width="18"
            height="18"
            strokeColor="var(--icon-stroke-color)"
          />
        </ModalCloseButton>
        {children}
      </ModalContainer>
    </ModalBackdrop>,
    document.getElementById('modal-root')
  );
};

export default ModalWrapper;
