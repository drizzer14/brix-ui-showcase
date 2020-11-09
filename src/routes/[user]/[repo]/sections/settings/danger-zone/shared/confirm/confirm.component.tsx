import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

import Modal from '@brix-ui/contexts/modal';
import Dialog from '@brix-ui/core/dialog';
import Divider from '@brix-ui/core/divider';
import { P, Span } from '@brix-ui/core/text';
import TextInput from '@brix-ui/core/text-input';
import Flex from '@brix-ui/core/flex';

import Styled from './confirm.styles';

interface ConfirmProps {
  isOpen: boolean;
  title: string;
  alert: ReactNode;
  actionTitle: string;
  close(): void;
}

export const Confirm: FC<ConfirmProps> = ({ children, isOpen, close, title, alert, actionTitle }) => {
  const { query } = useRouter();
  const { user, repo } = query as { user: string; repo: string };

  const [confirm, setConfirm] = useState<string>();

  return (
    <Modal isOpen={isOpen} onClose={close} unmountOnExit>
      <Dialog title={title} maxWidth="33%" customProperties={{ padding: '0' }}>
        <Styled.Alert intent="critical">
          <P lineHeightCompensation>{alert}</P>
        </Styled.Alert>

        {children}

        <Divider margin="0" />

        <Flex as="footer" direction="column" padding="16px" gap={{ vertical: '8px' }}>
          <P>
            Please type{' '}
            <Styled.Bold>
              {user}/{repo}
            </Styled.Bold>{' '}
            to confirm.
          </P>

          <TextInput value={confirm} onChange={(value) => setConfirm(value)} />

          <Styled.Button isDisabled={confirm !== `${user}/${repo}`} intent="critical" onClick={close}>
            <Span>I understand, {actionTitle}</Span>
          </Styled.Button>
        </Flex>
      </Dialog>

      <Styled.Overlay />
    </Modal>
  );
};
