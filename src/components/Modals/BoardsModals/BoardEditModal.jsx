import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
import { BacksList } from './BacksList';
import Pencil from 'components/Icons/Pencil';
import Plus from 'components/Icons/Plus';
import { Form, Title, Input, Text, Button, Span } from './BoardModals.styled';
import { ChangeIcons } from 'components/Sidebar/SidebarContent/SidebarContent.styled';

export const BoardEditModal = () => {
  const [shownModal, setShownModal] = useState(false);
  const { t } = useTranslation();

  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <>
      <ChangeIcons type="button" onClick={() => setShownModal(true)}>
        <Pencil
          width={16}
          height={16}
          strokeColor={'var(--sidebar-change-color'}
        />
      </ChangeIcons>

      {shownModal && (
        <ModalWrapper width="400px" onClose={() => setShownModal(false)}>
          <Form onSubmit={submitHandler}>
            <Title>{t('boards.modals.editTitle')}</Title>
            <Input type="text" placeholder={t('boards.modals.input')} />

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
              {t('boards.modals.editButton')}
            </Button>
          </Form>
        </ModalWrapper>
      )}
    </>
  );
};
