import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { createBoard, updateBoard } from '../../../redux/board/boardOperations';
import { selectOneBoard } from '../../../redux/board/boardSelectors';
import { DEFAULT_BACKGROUND_ID, TOASTER_CONFIG } from 'constants';
import { validateInputMaxLength } from 'helpers';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
import { BacksList } from './BacksList';
import { CustomBackground } from './CustomBackground';
import Plus from 'components/Icons/Plus';
import {
  Form,
  Title,
  Label,
  Input,
  Text,
  Button,
  Span,
} from './BoardModal.styled';

const BoardModal = ({ variant, closeModal, menu, closeMenu }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorClassName, setErrorClassName] = useState('');

  const navigate = useNavigate();
  const titleRef = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const oneBoard = useSelector(selectOneBoard);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const { title, background, iconId } = e.target.elements;

    if (!title.value.trim()) {
      return toast(t('boards.modals.toast.error'), TOASTER_CONFIG);
    }

    const data = {
      title: title.value,
      iconId: iconId.value,
      backgroundId: background.value,
    };

    if (variant === 'add') {
      const res = dispatch(createBoard(data));
      navigate(`/home/board/${res.payload._id}`);
      toast(t('boards.modals.toast.add.success'), TOASTER_CONFIG);
    } else {
      dispatch(updateBoard({ boardId: oneBoard._id, dataUpdate: data }));
      toast(t('boards.modals.toast.edit.success'), TOASTER_CONFIG);
    }

    closeModal();
    if (menu) closeMenu();
    return;
  };

  return (
    <ModalWrapper width={350} onClose={closeModal}>
      <Form onSubmit={handleSubmit}>
        <Title>
          {variant === 'add'
            ? t('boards.modals.newTitle')
            : t('boards.modals.editTitle')}
        </Title>

        <Label>
          <Input
            className={errorClassName}
            ref={titleRef}
            type="text"
            placeholder={t('boards.modals.input')}
            name="title"
            defaultValue={variant === 'add' ? '' : oneBoard.title}
            autoComplete="off"
            maxLength={25}
            onChange={e =>
              validateInputMaxLength(e, setErrorMsg, setErrorClassName)
            }
          />
          {errorMsg && <p>{errorMsg}</p>}
        </Label>

        <Text>{t('boards.modals.icons')}</Text>
        <IconsList iconId={variant === 'add' ? 0 : oneBoard.icon_id} />

        <Text>{t('boards.modals.background')}</Text>
        <BacksList
          backgroundId={
            variant === 'add' ? DEFAULT_BACKGROUND_ID : oneBoard.background._id
          }
        />

        <Text>Choose your custom background</Text>
        {/* <CustomBackground /> */}

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
