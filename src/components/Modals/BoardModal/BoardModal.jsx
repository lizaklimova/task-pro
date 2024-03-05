import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
import { BacksList } from './BacksList';
import Plus from 'components/Icons/Plus';
import { Form, Title, Input, Text, Button, Span } from './BoardModal.styled';

// 65e73bce8eca63d933f9c137

import { createBoard } from '../../../redux/board/boardOperations';
import { selectOneBoard } from '../../../redux/board/boardSelectors';

const BoardModal = ({ variant, closeModal }) => {
  const OneBoard = useSelector(selectOneBoard);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleSubmit = e => {
    e.preventDefault();
    const { boardTitle, backgroundIcon, icon } = e.target.elements;

    const data = {
      title: boardTitle.value,
      iconId: icon.value,
      backgroundId: backgroundIcon.value,
    };

    if (variant === 'add') {
      dispatch(createBoard(data));
    } else {
    }
    // console.log(data);

    return closeModal();
  };

  console.log(OneBoard);

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
          defaultValue={''}
        />

        <Text>{t('boards.modals.icons')}</Text>
        <IconsList />

        <Text>{t('boards.modals.background')}</Text>
        <BacksList />

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