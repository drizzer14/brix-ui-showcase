import { useMemo } from 'react';
import useSingleSelection from '@brix-ui/hooks/use-single-selection';

import type { EFC } from 'shared';

import { Tabs } from './tabs';

import { Settings } from './settings';

import Styled from './sections.styles';

interface SectionsProps {
  sections: string[];
  defaultSection?: string;
}

export const Sections: EFC<SectionsProps> = ({ sections, defaultSection }) => {
  const { value, dispatch } = useSingleSelection(defaultSection);

  const Section = useMemo<EFC>(() => {
    if (value) {
      return ({
        Settings,
      } as Record<typeof value, EFC>)[value];
    }

    return () => <></>;
  }, [value]);

  return (
    <>
      <Tabs
        tabs={sections}
        isTabSelected={(tab) => tab === value}
        select={dispatch.setValue}
        register={dispatch.addOption}
      />

      <Styled.Section>
        <Section />
      </Styled.Section>
    </>
  );
};
