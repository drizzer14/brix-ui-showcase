import { useReducer } from 'react';

export function useConfirm(): [isConfirmOpen: boolean, setConfirmOpen: () => void] {
  return useReducer((state) => !state, false);
}
