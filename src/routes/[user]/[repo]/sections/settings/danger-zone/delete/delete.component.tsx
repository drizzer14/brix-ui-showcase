import Flex from '@brix-ui/core/flex';
import { P } from '@brix-ui/core/text';

import { EFC, Bold } from 'shared';
import { ApiValue } from '../../../../api';

import { useConfirm, ActionSheet, Confirm } from '../shared';

export const Delete: EFC<ApiValue> = ({ user, repo }) => {
  const [isConfirmOpen, setConfirmOpen] = useConfirm();
  const title = 'Delete this repository';

  return (
    <>
      <ActionSheet
        title={title}
        description="Once you delete a repository, there is no going back. Please be certain."
        button={title}
        onClick={setConfirmOpen}
      />

      <Confirm
        isOpen={isConfirmOpen}
        title="Archive repository"
        alert="Unexpected bad things will happen if you don’t read this!"
        actionTitle={title.toLowerCase()}
        close={setConfirmOpen}
      >
        <Flex direction="column" padding="16px" gap={{ vertical: '16px' }}>
          <P>
            This action <Bold as="strong">cannot</Bold> be undone. This will permanently delete the{' '}
            <Bold as="strong">
              {user}/{repo}
            </Bold>{' '}
            repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all collaborator
            associations.
          </P>
        </Flex>
      </Confirm>
    </>
  );
};
