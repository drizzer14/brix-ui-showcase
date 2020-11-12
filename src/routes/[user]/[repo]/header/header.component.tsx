import Head from 'next/head';
import Link from 'next/link';
import Flex from '@brix-ui/core/flex';

import { EFC, ThemeSwitch } from 'shared';

import Styled from './header.styles';

import { Search } from './search';

interface HeaderProps {
  title: string;
}

export const Header: EFC<HeaderProps> = ({ title }) => {
  return (
    <Styled.Header horizontalAlign="space-between">
      <Head>
        <title>{title}</title>

        <meta property="og:title" content={title} key="title" />
      </Head>

      <Link href="/">
        <Styled.Logo />
      </Link>

      <Flex horizontalGap="8px" horizontalAlign="end">
        <Search />

        <ThemeSwitch />
      </Flex>
    </Styled.Header>
  );
};
