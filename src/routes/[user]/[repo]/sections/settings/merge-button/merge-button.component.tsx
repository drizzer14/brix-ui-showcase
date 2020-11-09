import Flex from '@brix-ui/core/flex';
import { P } from '@brix-ui/core/text';

import type { EFC } from 'shared';
import { CheckboxList } from '../shared/checkbox-list';

import { Heading } from '../shared/heading';

export const MergeButton: EFC = () => {
  return (
    <Flex direction="column" gap={{ vertical: '16px' }}>
      <Heading>Merge button</Heading>

      <P>
        When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one
        option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable
        squashing or rebasing.
      </P>

      <CheckboxList
        descriptors={[
          {
            label: 'Allow merge commits',
            children: 'Add all commits from the head branch to the base branch with a merge commit.',
          },
          {
            label: 'Allow squash merging',
            children: 'Combine all commits from the head branch into a single commit in the base branch.',
          },
          {
            label: 'Allow rebase merging',
            children: 'Add all commits from the head branch onto the base branch individually.',
          },
        ]}
      />

      <P>
        When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one
        option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable
        squashing or rebasing.
      </P>

      <CheckboxList
        descriptors={[
          {
            label: 'Automatically delete head branches',
            children: 'Deleted branches will still be able to be restored.',
          },
        ]}
      />
    </Flex>
  );
};
