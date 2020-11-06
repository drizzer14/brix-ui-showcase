import Flex from '@brix-ui/core/flex';

import type { EFC } from 'shared';

import { Tab, TabProps } from './tab';

interface TabsProps extends Pick<TabProps, 'register' | 'select'> {
  tabs: string[];
  isTabSelected(tab: string): boolean;
}

export const Tabs: EFC<TabsProps> = ({ tabs, isTabSelected, register, select }) => {
  return (
    <Flex as="nav" padding={{ horizontal: '32px' }} margin={{ top: '16px' }}>
      {tabs.map((tab) => {
        return (
          <Tab key={tab} isSelected={isTabSelected(tab)} register={register} select={select}>
            {tab}
          </Tab>
        );
      })}
    </Flex>
  );
};
