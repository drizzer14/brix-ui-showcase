import type { Reducer } from 'react';
import type { FormAction } from './form.actions';

export interface FormState {
  [name: string]: {
    value: string | undefined;
    error?: string;
  };
}

export const formReducer: Reducer<FormState, FormAction> = (state, action) => {
  switch (action.type) {
    case 'set-value': {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: {
          ...(state[name] || {}),
          value,
        },
      };
    }
    case 'set-error': {
      const { name, message } = action.payload;

      return {
        ...state,
        [name]: {
          ...(state[name] || {}),
          error: message,
        },
      };
    }
    default: {
      return state;
    }
  }
};
