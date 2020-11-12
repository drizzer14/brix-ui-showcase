import Button from '@brix-ui/core/button';
import Flex from '@brix-ui/core/flex';
import { P, Span, Strong } from '@brix-ui/core/text';

import type { EFC } from 'shared';

import Styled from './social-preview.styles';

export const SocialPreview: EFC = () => {
  return (
    <Flex as="article" direction="column" margin={{ top: '16px' }}>
      <Styled.Heading weight={700}>Social preview</Styled.Heading>

      <Flex direction="column" verticalGap="8px" margin={{ bottom: '16px' }}>
        <P>Upload an image to customize your repository’s social media preview.</P>

        <Flex direction="column">
          <P>Images should be at least 640×320px (1280×640px for best display).</P>

          <Styled.TemplateButton type="button">
            <Strong as="span">Download template</Strong>
          </Styled.TemplateButton>
        </Flex>
      </Flex>

      <Styled.Preview verticalAlign="end" padding="8px" $src="https://picsum.photos/1280/640">
        <Button>
          <Span lineHeightCompensation>Edit</Span>
        </Button>
      </Styled.Preview>
    </Flex>
  );
};
