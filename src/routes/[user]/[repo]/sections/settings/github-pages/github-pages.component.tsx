import Button from '@brix-ui/core/button';
import { useMemo } from 'react';
import Flex from '@brix-ui/core/flex';
import { orUndefined } from '@brix-ui/utils/functions';
import { P, Span, Strong, Code } from '@brix-ui/core/text';

import { EFC, Anchor } from 'shared';
import { useApi } from '../../../api';

import { CheckboxDescriptor, Heading } from '../shared';

import Styled from './github-pages.styles';
import { LearnMore } from './learn-more.component';

export const GithubPages: EFC = () => {
  const isPublished = useMemo(() => orUndefined(Math.round(Math.random())), []);
  const { user, repo } = useApi();
  const ghPagesLink = useMemo(() => (user ? `${user.toLowerCase()}.github.io` : ''), [user]);

  return (
    <Flex direction="column" verticalGap="16px">
      <Heading>GitHub Pages</Heading>

      <Styled.List data-published={isPublished}>
        {isPublished && (
          <Styled.ListItem>
            <Styled.Alert intent="success">
              <P lineHeightCompensation>
                Your site is published at{' '}
                <Anchor as="button">
                  https://{ghPagesLink}/{repo}/
                </Anchor>
              </P>
            </Styled.Alert>
          </Styled.ListItem>
        )}

        <Styled.ListItem padding="16px" verticalGap="32px">
          <Flex direction="column">
            <Styled.Title>Source</Styled.Title>

            <P>
              Your GitHub Pages site is currently being built from the <Code>gh-pages</Code> branch.{' '}
              <LearnMore href="https://docs.github.com/articles/configuring-a-publishing-source-for-github-pages/" />.
            </P>

            <Flex horizontalGap="8px" margin={{ top: '8px' }}>
              <Button appearance="faint">
                <Span lineHeightCompensation>
                  <Span color="var(--c-faint-strong)">Branch:</Span> gh-pages
                </Span>
              </Button>

              <Button appearance="faint">
                <Span lineHeightCompensation>/ (root)</Span>
              </Button>

              <Button appearance="faint" isDisabled>
                <Span lineHeightCompensation>Save</Span>
              </Button>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Styled.Title>Theme chooser</Styled.Title>

            <P>
              Select a theme to publish your site with a Jekyll theme.{' '}
              <LearnMore href="https://docs.github.com/articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser/" />
              .
            </P>

            <Flex horizontalGap="8px" margin={{ top: '8px' }}>
              <Button appearance="faint">
                <Span lineHeightCompensation>Choose a theme</Span>
              </Button>
            </Flex>
          </Flex>
        </Styled.ListItem>

        <Styled.ListItem padding="32px 16px">
          <Flex direction="column">
            <Styled.Title>Custom domain</Styled.Title>

            <P>
              Custom domains allow you to serve your site from a domain other than <Code>{ghPagesLink}</Code>.{' '}
              <LearnMore href="https://docs.github.com/articles/using-a-custom-domain-with-github-pages/" />
            </P>
          </Flex>

          <Flex horizontalGap="8px" margin={{ top: '8px' }}>
            <Styled.TextInput isReadonly />

            <Button appearance="faint" isDisabled>
              <Span lineHeightCompensation>Save</Span>
            </Button>
          </Flex>
        </Styled.ListItem>

        <Styled.ListItem padding="16px">
          <CheckboxDescriptor
            label={<Strong>Enforce HTTPS</Strong>}
            checkboxProps={{
              defaultValue: true,
              isDisabled: true,
            }}
          >
            <Flex direction="column" verticalGap="16px">
              <span>
                — Required for your site because you are using the default domain (<code>{ghPagesLink}</code>)
              </span>

              <span>
                HTTPS provides a layer of encryption that prevents others from snooping on or tampering with traffic to
                your site. When HTTPS is enforced, your site will only be served over HTTPS.{' '}
                <LearnMore href="https://docs.github.com/articles/securing-your-github-pages-site-with-https" />
              </span>
            </Flex>
          </CheckboxDescriptor>
        </Styled.ListItem>
      </Styled.List>
    </Flex>
  );
};
