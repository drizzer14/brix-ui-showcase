import { P, Span } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import { ActionSheetProps } from '../action-sheet';
import { CheckboxDescriptor, CheckboxDescriptorProps } from '../checkbox-descriptor';

import Styled from './checkbox-list.styles';

interface CheckboxListProps {
  descriptors: Array<
    CheckboxDescriptorProps & {
      actionSheet?: ActionSheetProps;
    }
  >;
}

export const CheckboxList: EFC<CheckboxListProps> = ({ descriptors }) => {
  return (
    <Styled.List>
      {descriptors.map(({ label, children, actionSheet }) => {
        return (
          <li key={label as string}>
            <CheckboxDescriptor label={<P>{label}</P>}>{children}</CheckboxDescriptor>

            {actionSheet && (
              <Styled.ActionSheet
                {...actionSheet}
                button={
                  <Styled.ActionButton>
                    <Span lineHeightCompensation>{actionSheet.button}</Span>
                  </Styled.ActionButton>
                }
              />
            )}
          </li>
        );
      })}
    </Styled.List>
  );
};
