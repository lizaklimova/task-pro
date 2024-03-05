import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
import { BacksList } from './BacksList';
import Plus from 'components/Icons/Plus';
import { Form, Title, Input, Text, Button, Span } from './BoardModal.styled';

import {
  // getAllBoards,
  createBoard,
} from '../../../redux/board/boardOperations';
// import { selectBoards } from '../../../redux/board/boardSelectors';
// import Loader from 'components/Loader/Loader';

const BoardModal = ({ variant, closeModal }) => {
  // const [boards, setBoards] = useState([]);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    const { boardTitle, backgroundIcon, icon } = e.target.elements;

    console.log(backgroundIcon.value);

    const data = {
      title: boardTitle.value,
      iconId: icon.value,
      backgroundId: backgroundIcon.value,
    };

    if (variant === 'add') {
      dispatch(createBoard(data));
    } else {
      dispatch(createBoard(data));
    }

    closeModal();
  };

  return (
    <ModalWrapper width={350} onClose={closeModal}>
      <Form onSubmit={handleSubmit}>
        <Title>
          {variant === 'add'
            ? t('boards.modals.newTitle')
            : t('boards.modals.editTitle')}
        </Title>
        <Input
          type="text"
          placeholder={t('boards.modals.input')}
          name="boardTitle"
        />

        <Text>{t('boards.modals.icons')}</Text>
        <IconsList />

        <Text>{t('boards.modals.background')}</Text>
        <BacksList />
        {/* <Loader width={50} /> */}
        <Button type="submit">
          <Span>
            <Plus
              width={14}
              height={14}
              strokeColor={'var(--btn-icon-color)'}
            />
          </Span>
          {variant === 'add'
            ? t('boards.modals.newButton')
            : t('boards.modals.editButton')}
        </Button>
      </Form>
    </ModalWrapper>
  );
};

export default BoardModal;
