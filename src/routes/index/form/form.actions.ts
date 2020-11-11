export type FormAction = SetValue | SetError;

export interface SetValue {
  type: 'set-value';
  payload: {
    name: string;
    value: string | undefined;
  };
}

export interface SetError {
  type: 'set-error';
  payload: {
    name: string;
    message: string;
  };
}
