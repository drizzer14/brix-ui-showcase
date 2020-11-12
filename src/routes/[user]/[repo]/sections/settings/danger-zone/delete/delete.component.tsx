import Flex from '@brix-ui/core/flex';
import { P, Strong } from '@brix-ui/core/text';

import type { EFC } from 'shared';
import type { ApiValue } from '../../../../api';

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
        <Flex direction="column" padding="16px" verticalGap="16px">
          <P>
            This action <Strong>cannot</Strong> be undone. This will permanently delete the{' '}
            <Strong>
              {user}/{repo}
            </Strong>{' '}
            repository, wiki, issues, comments, packages, secrets, workflow runs, and remove all collaborator
            associations.
          </P>
        </Flex>
      </Confirm>
    </>
  );
};
