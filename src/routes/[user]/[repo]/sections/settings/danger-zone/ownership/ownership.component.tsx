import Flex from '@brix-ui/core/flex';
import { P } from '@brix-ui/core/text';
import TextInput from '@brix-ui/core/text-input';

import { EFC, Bold } from 'shared';

import { useConfirm, ActionSheet, Confirm } from '../shared';

export const Ownership: EFC = () => {
  const [isConfirmOpen, setConfirmOpen] = useConfirm();

  return (
    <>
      <ActionSheet
        title="Transfer ownership"
        description="Transfer this repository to another user or to an organization where you have the ability to create repositories."
        button="Transfer"
        onClick={setConfirmOpen}
      />

      <Confirm
        isOpen={isConfirmOpen}
        title="Transfer repository"
        alert={
          <>
            To understand admin access, teams, issue assignments, and redirects after a repository is transferred, see{' '}
            <a href="https://docs.github.com/articles/transferring-a-repository/" target="_blank" rel="noreferrer">
              Transferring a repository
            </a>{' '}
            in GitHub Help.
          </>
        }
        actionTitle="transfer this repository"
        close={setConfirmOpen}
      >
        <Flex direction="column" padding="16px" gap={{ vertical: '8px' }}>
          <P>Transferring may be delayed until the new owner approves the transfer.</P>

          <Bold forwardedAs="label" htmlFor="name">
            New owner’s GitHub username or organization name
          </Bold>

          <TextInput id="name" placeholder="Username or organization name" />
        </Flex>
      </Confirm>
    </>
  );
};
