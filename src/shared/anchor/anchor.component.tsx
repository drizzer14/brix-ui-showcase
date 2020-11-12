import type { AnchorHTMLAttributes, FC } from 'react';
import type { Taggable } from '@brix-ui/types/component';
import type { HtmlTag } from '@brix-ui/types/html';

import Styled from './anchor.styles';

export const Anchor: FC<AnchorHTMLAttributes<HTMLAnchorElement> & Taggable<HtmlTag>> = (props) => {
  return <Styled.Anchor target="_blank" rel="noreferrer" {...props} />;
};
