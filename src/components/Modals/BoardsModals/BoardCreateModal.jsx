import { useState } from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { IconsList } from './IconsList';

import Plus from 'components/Icons/Plus';

import { Form, Title, Input, Text, Button, Span } from './BoardModals.styled';
export const BoardCreateModal = () => {
  const [shownModal, setShownModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShownModal(true)}>
        Open Modal Board Base
      </button>
      {shownModal && (
        <ModalWrapper width={350} onClose={() => setShownModal(false)}>
          <Form>
            <Title>New board</Title>
            <Input type="text" placeholder="Title" />

            <Text>Icons</Text>
            <IconsList />

            <Text>Background</Text>

            <Button type="submit">
              <Span>
                <Plus
                  width={14}
                  height={14}
                  strokeColor={'var(--btn-icon-color)'}
                />
              </Span>
              Create
            </Button>
          </Form>
        </ModalWrapper>
      )}
    </>
  );
};
