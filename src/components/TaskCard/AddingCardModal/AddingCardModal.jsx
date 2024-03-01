import { useState } from 'react';
import ModalWrapper from 'components/Modals/ModalWrapper';
import { closeModal } from 'helpers';
import Plus from 'components/icons/Plus';
import {
  AddCardModalContent,
  AddCardForm,
  LabelRadioList,
  LabelRadioInput,
} from './AddingCardModal.styled';

const labelArr = [
  { id: 1, color: 'violet' },
  { id: 2, color: 'pink' },
  { id: 3, color: 'green' },
  { id: 4, color: 'gray' },
];

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
                <LabelRadioList>
                  {labelArr.map(({ id, color }) => {
                    return (
                      <li key={id}>
                        <LabelRadioInput
                          $color={color}
                          type="radio"
                          name="label"
                          value={color}
                          checked={labelColor === color}
                          onChange={e => setLabelColor(e.target.value)}
                        />
                      </li>
                    );
                  })}
                </LabelRadioList>
                {/* <LabelDiv>
                  <span id="violet"></span>
                  <span id="pink"></span>
                  <span id="green"></span>
                  <span id="gray"></span>
                </LabelDiv> */}
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
