export type Page = {
  page: Show;
};
export type Show = {
  title: string;
  'total-content-items': string;
  'page-num-requested': string;
  'page-size-requested': string;
  'page-size-returned': string;
  'content-items': ShowContentItems;
};

type ShowContentItems = {content: [ShowContent]};

export type ShowContent = {
  name: string;
  'poster-image': string;
};

export enum ImageName {
  'poster1' = 'poster1',
  'poster2' = 'poster2',
  'poster3' = 'poster3',
  'poster4' = 'poster4',
  'poster5' = 'poster5',
  'poster6' = 'poster6',
  'poster7' = 'poster7',
  'poster8' = 'poster8',
  'poster9' = 'poster9',
}
