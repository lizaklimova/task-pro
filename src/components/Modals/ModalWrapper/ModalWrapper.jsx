import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CLOSE_KEY_CODE } from 'constants';
import Close from 'components/icons/Close';
import {
  ModalBackdrop,
  ModalCloseButton,
  ModalContainer,
} from './ModalWrapper.styled';

const ModalWrapper = ({ children, width, onClose }) => {
  useEffect(() => {
    const handleCloseKeyPress = event => {
      if (event.code === CLOSE_KEY_CODE) onClose();
    };

    document.addEventListener('keydown', handleCloseKeyPress);

    return () => document.removeEventListener('keydown', handleCloseKeyPress);
  }, [onClose]);

  return createPortal(
    <ModalBackdrop onClick={onClose}>
      <ModalContainer
        $containerWidth={width}
        onClick={event => event.stopPropagation()}
      >
        <ModalCloseButton type="button" onClick={onClose}>
          <Close width="18" height="18" strokeColor="white" />
        </ModalCloseButton>
        <div>{children}</div>
      </ModalContainer>
    </ModalBackdrop>,
    document.getElementById('modal-root')
  );
};

export default ModalWrapper;
