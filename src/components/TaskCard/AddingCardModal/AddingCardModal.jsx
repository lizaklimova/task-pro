import { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper';
import { closeModal } from 'helpers';
import Plus from 'components/icons/Plus';
import { AddCardModalContent, AddCardForm } from './AddingCardModal.styled';

const AddingCardModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <ModalWrapper width={335} onClose={() => closeModal(setIsModalOpen)}>
          <AddCardModalContent>
            <p>Add card</p>

            <AddCardForm>
              <input type="text" name="title" placeholder="Title" />
              <textarea name="description" placeholder="Description"></textarea>

              <label>
                Label color
                <div>
                  <input type="radio" name="label" value="violet" />
                  <input type="radio" name="label" value="pink" />
                  <input type="radio" name="label" value="green" />
                  <input type="radio" name="label" value="gray" />
                </div>
              </label>

              <label>
                Deadline
                <input type="date" />
              </label>
              <button type="submit">
                <span>
                  <Plus width={14} height={14} strokeColor={'#161616'} />
                </span>
                Add
              </button>
            </AddCardForm>
          </AddCardModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default AddingCardModal;
