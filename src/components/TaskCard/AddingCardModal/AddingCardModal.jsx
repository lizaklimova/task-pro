import { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper';
import { closeModal } from 'helpers';
import Plus from 'components/icons/Plus';
import {
  AddCardModalContent,
  AddCardForm,
  LabelDiv,
} from './AddingCardModal.styled';

const AddingCardModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [labelColor, setLabelColor] = useState('violet');

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
                  <input
                    type="radio"
                    name="label"
                    value="violet"
                    checked={labelColor === 'violet'}
                    onChange={e => setLabelColor(e.target.value)}
                  />
                  <input
                    type="radio"
                    name="label"
                    value="pink"
                    checked={labelColor === 'pink'}
                    onChange={e => setLabelColor(e.target.value)}
                  />
                  <input
                    type="radio"
                    name="label"
                    value="green"
                    checked={labelColor === 'green'}
                    onChange={e => setLabelColor(e.target.value)}
                  />
                  <input
                    type="radio"
                    name="label"
                    value="gray"
                    checked={labelColor === 'gray'}
                    onChange={e => setLabelColor(e.target.value)}
                  />
                  <LabelDiv>
                    <span id="violet"></span>
                    <span id="pink"></span>
                    <span id="green"></span>
                    <span id="gray"></span>
                  </LabelDiv>
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
