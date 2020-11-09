import Flex from '@brix-ui/core/flex';
import RadioGroup, { RadioButton } from '@brix-ui/core/radio-group';
import { P } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import { ActionSheet, Confirm, useConfirm } from '../shared';

import Styled from './visibility.styles';

export const Visibility: EFC = () => {
  const [isConfirmOpen, setConfirmOpen] = useConfirm();
  const title = 'Change repository visibility';

  return (
    <>
      <ActionSheet
        title={title}
        description="This repository is currently public."
        button="Change visibility"
        onClick={setConfirmOpen}
      />

      <Confirm
        isOpen={isConfirmOpen}
        title={title}
        alert="Warning: this is a potentially destructive action."
        actionTitle={title.toLowerCase()}
        close={setConfirmOpen}
      >
        <RadioGroup name="visibility" defaultValue="public">
          <Flex direction="column" padding="16px" gap={{ vertical: '16px' }}>
            {[
              {
                visibility: 'public',
                caption: 'This repository is currently public',
              },
              {
                visibility: 'private',
                caption: 'Hide this repository from the public.',
              },
            ].map(({ visibility, caption }) => {
              return (
                <Styled.Radio key={visibility}>
                  <RadioButton value={visibility} />

                  <Styled.Label>
                    <P>Make {visibility}</P>

                    <P>{caption}</P>
                  </Styled.Label>
                </Styled.Radio>
              );
            })}
          </Flex>
        </RadioGroup>
      </Confirm>
    </>
  );
};