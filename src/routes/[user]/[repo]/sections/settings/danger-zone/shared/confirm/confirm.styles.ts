import styled from 'styled-components';
import BrixAlert from '@brix-ui/core/alert';
import BrixOverlay from '@brix-ui/core/overlay';
import BrixButton from '@brix-ui/core/button';

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

const Styled = { Alert, Overlay, Button };

export default Styled;
