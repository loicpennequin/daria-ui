export type Maybe<T> = T | null | undefined;

export type WithScreen<T extends string> = T | `screen-${T}`;
export type Size = WithScreen<'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${number}xl`>;

export type PartialBy<T, K extends keyof T = never> = Omit<T, K> &
  Partial<Pick<T, K>>;
