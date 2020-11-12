import Flex from '@brix-ui/core/flex';
import styled, { css } from 'styled-components';
import { P } from '@brix-ui/core/text';

const Heading = styled(P)`
  margin-bottom: 16px;
`;

const TemplateButton = styled.button`
  color: var(--c-accent-strong);

  &:hover {
    text-decoration: underline;
  }
`;

const Preview = styled(Flex).attrs(() => ({
  forwardedAs: 'figure',
}))<{
  $src: string;
}>(
  ({ $src: src }) => css`
    position: relative;

    width: 100%;
    max-width: 640px;
    height: 320px;

    object-fit: cover;
    object-position: center;

    border-radius: 4px;
    border: 1px solid var(--c-faint-weak-up);

    background-image: url(${src});
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  `
);

const Styled = { Heading, TemplateButton, Preview };

export default Styled;
