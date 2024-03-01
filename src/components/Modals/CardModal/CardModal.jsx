import { useState } from 'react';
import { closeModal } from 'helpers';
import { LABEL_ARR } from 'constants';
import ModalWrapper from 'components/Modals/ModalWrapper';
import Plus from 'components/Icons/Plus';
import {
  CardModalContent,
  CardForm,
  LabelRadioList,
  LabelRadioLabel,
} from './CardModal.styled';

const CardModal = ({ variant }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [labelColor, setLabelColor] = useState('blue');

  //  const handleCardFormSubmit = () => {}
  // useEffect(() => {}, []);

  return (
    <>
      {isModalOpen && (
        <ModalWrapper width={350} onClose={() => closeModal(setIsModalOpen)}>
          <CardModalContent>
            <p> {variant === 'add' ? 'Add' : 'Edit'} card</p>

            <CardForm>
              <input type="text" name="title" placeholder="Title" />
              <textarea name="description" placeholder="Description"></textarea>

              <label>
                Label color
                <LabelRadioList>
                  {LABEL_ARR.map(({ id, color }) => {
                    return (
                      <li key={id}>
                        <LabelRadioLabel $color={color}>
                          <input
                            type="radio"
                            name="label"
                            value={color}
                            checked={labelColor === color}
                            onChange={e => setLabelColor(e.target.value)}
                          />
                        </LabelRadioLabel>
                      </li>
                    );
                  })}
                </LabelRadioList>
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
            </CardForm>
          </CardModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default CardModal;
