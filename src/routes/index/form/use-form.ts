import { Dispatch, useReducer } from 'react';

import type { FormAction } from './form.actions';
import { formReducer, FormState } from './form.reducer';

export function useForm<S extends FormState>(): [state: S, dispatch: Dispatch<FormAction>] {
  const [state, dispatch] = useReducer(formReducer, {
    owner: {
      value: '',
    },
    repo: {
      value: '',
    },
  });

  return [state as S, dispatch];
}
