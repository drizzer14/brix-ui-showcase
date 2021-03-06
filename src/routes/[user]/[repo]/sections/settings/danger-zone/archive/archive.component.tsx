import Flex from '@brix-ui/core/flex';
import { P, Strong } from '@brix-ui/core/text';

import type { EFC } from 'shared';
import type { ApiValue } from '../../../../api';

import { useConfirm, ActionSheet, Confirm } from '../shared';

export const Archive: EFC<ApiValue> = ({ user, repo }) => {
  const [isConfirmOpen, setConfirmOpen] = useConfirm();
  const title = 'Archive this repository';

  return (
    <>
      <ActionSheet
        title={title}
        description="Mark this repository as archived and read-only."
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
          {[
            <>
              This will make the{' '}
              <Strong>
                {user}/{repo}
              </Strong>{' '}
              repository, issues, pull requests, labels, milestones, projects, wiki, releases, commits, tags, branches,
              reactions and comments read-only and disable any future comments. The repository can still be forked.
            </>,
            'Ensure you’ve changed any repository settings, considered closing all open issues and pull requests and updated your README before you archive this repository.',
            'Once archived, you can unarchive the repository at any time.',
          ].map((text, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <P key={index}>{text}</P>;
          })}
        </Flex>
      </Confirm>
    </>
  );
};
