import type { ReactElement } from 'react';

export type EFC<P = {}> = (props: P, context?: any) => ReactElement<any, any> | null;
