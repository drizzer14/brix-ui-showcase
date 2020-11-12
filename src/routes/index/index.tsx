import { FormEventHandler, useCallback } from 'react';
import { useRouter } from 'next/router';
import Button from '@brix-ui/core/button';
import Text, { Span } from '@brix-ui/core/text';
import TextInput from '@brix-ui/core/text-input';

import type { EFC } from 'shared';

import { useForm, FormState } from './form';

import Styled from './index.styles';

const Index: EFC = () => {
  const [state, dispatch] = useForm<Record<'owner' | 'repo', FormState['owner' | 'repo']>>();
  const { owner, repo } = state;

  const { push } = useRouter();

  const handleChange = useCallback(
    (name: string) => (value: string | undefined) => {
      dispatch({
        type: 'set-error',
        payload: {
          name,
        },
      });

      dispatch({
        type: 'set-value',
        payload: {
          name,
          value,
        },
      });
    },
    []
  );

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();

      push(`/${owner.value}/${repo.value}`);
    },
    [push, owner.value, repo.value]
  );

  const handleInvalid = useCallback<FormEventHandler<HTMLInputElement>>((event) => {
    dispatch({
      type: 'set-error',
      payload: {
        name: (event.target as HTMLInputElement).name,
        message: 'This field is required',
      },
    });
  }, []);

  return (
    <Styled.Form verticalGap="32px" padding="32px" onSubmit={handleSubmit} onInvalid={handleInvalid}>
      {(Object.keys(state) as Array<keyof typeof state>).map((name) => {
        const { value, error } = state[name];

        return (
          <Styled.Label key={name}>
            <Text as="p" variant="h5">
              {`${name[0].toUpperCase()}${name.slice(1)}*`}
            </Text>

            <TextInput name={name} isRequired value={value} onChange={handleChange(name)} />

            {error && <Styled.Error>{error}</Styled.Error>}
          </Styled.Label>
        );
      })}

      <Styled.Container margin={{ top: '26px' }}>
        <Button type="submit" intent="accent" appearance={!(owner.value && repo.value) ? 'faint' : 'contained'}>
          <Span>Go!</Span>
        </Button>
      </Styled.Container>

      <Styled.ThemeSwitch />
    </Styled.Form>
  );
};

export default Index;
