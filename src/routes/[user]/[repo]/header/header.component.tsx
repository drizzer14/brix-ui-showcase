import Head from 'next/head';

import type { EFC } from 'shared';

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

      <a href={`https://github.com/${title.replace(/\s/g, '')}`} target="_blank" rel="noreferrer">
        <Styled.Logo />
      </a>

      <Search />
    </Styled.Header>
  );
};
