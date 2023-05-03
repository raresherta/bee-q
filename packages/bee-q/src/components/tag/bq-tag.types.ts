export const TAG_SIZE = ['small', 'medium', 'large'] as const;
export type TTagSize = (typeof TAG_SIZE)[number];
