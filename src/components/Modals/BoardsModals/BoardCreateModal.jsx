import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';
import { BacksList } from './BacksList';
import Plus from 'components/Icons/Plus';
import { Form, Title, Input, Text, Button, Span } from './BoardModals.styled';
import { AddBtn } from 'components/Sidebar/SidebarContent/SidebarContent.styled';

export const BoardCreateModal = () => {
  const [shownModal, setShownModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <AddBtn type="button" onClick={() => setShownModal(true)}>
        <Plus width={20} height={20} strokeColor={'var(--sidebar-plus-icon)'} />
      </AddBtn>
      {shownModal && (
        <ModalWrapper width={350} onClose={() => setShownModal(false)}>
          <Form>
            <Title>{t('boards.modals.newTitle')}</Title>
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
              {t('boards.modals.newButton')}
            </Button>
          </Form>
        </ModalWrapper>
      )}
    </>
  );
};
