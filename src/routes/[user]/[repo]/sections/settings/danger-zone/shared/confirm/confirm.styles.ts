import styled from 'styled-components';
import { Span } from '@brix-ui/core/text';
import BrixAlert from '@brix-ui/core/alert';
import BrixOverlay from '@brix-ui/core/overlay';
import BrixButton from '@brix-ui/core/button';

const Bold = styled(Span)`
  font-weight: 600;
`;

const Alert = styled(BrixAlert)`
  border-radius: 0;
`;

const Overlay = styled(BrixOverlay)`
  --opacity: 75%;
  background-color: var(--c-base-weak);
`;

const Button = styled(BrixButton)`
  justify-content: center;
`;

const Styled = { Bold, Alert, Overlay, Button };

export default Styled;
