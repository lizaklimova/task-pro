import ModalWrapper from 'components/Modals/ModalWrapper/ModalWrapper';
import developers from './developers_info.json';
import DevList from './DevList';

const DevModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <ModalWrapper
          width={'900px'}
          onClose={() => {
            document.body.style.overflow = '';
            onClose();
          }}
          developers
        >
          <DevList developers={developers.developers} />
        </ModalWrapper>
      )}
    </>
  );
};

export default DevModal;
