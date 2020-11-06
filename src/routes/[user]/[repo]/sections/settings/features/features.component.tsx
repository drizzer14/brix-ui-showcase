import Flex from '@brix-ui/core/flex';

import type { EFC } from 'shared';

import { Heading, CheckboxList } from '../shared';

export const Features: EFC = () => {
  return (
    <Flex direction="column" margin={{ top: '32px' }} gap={{ vertical: '16px' }}>
      <Heading>Features</Heading>

      <CheckboxList
        descriptors={[
          {
            label: 'Wikis',
          },
          {
            label: 'Restrict editing to collaborators only',
            children: 'Public wikis will still be readable by everyone.',
          },
          {
            label: 'Issues',
            children:
              'Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages.',
            actionSheet: {
              title: 'Get organized with issue templates',
              description:
                'Give contributors issue templates that help you cut through the noise and help them push your project forward.',
              button: 'Set up templates',
            },
          },
          {
            label: 'Sponsorships',
            children: 'Sponsorships help your community know how to financially support this repository.',
            actionSheet: {
              title: 'Display a "Sponsor" button',
              description:
                'Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.',
              button: 'Set up sponsor button',
            },
          },
          {
            label: 'Projects',
            children:
              'Project boards on GitHub help you organize and prioritize your work. You can create project boards for specific feature work, comprehensive roadmaps, or even release checklists.',
          },
          {
            label: 'Preserve this repository',
            children: (
              <>
                Include this code in the{' '}
                <a href="https://archiveprogram.github.com/faq/" target="_blank" rel="noreferrer">
                  GitHub Archive Program
                </a>
                .
              </>
            ),
          },
        ]}
      />
    </Flex>
  );
};
