import Content1 from '../assets/data/CONTENTLISTINGPAGE-PAGE1.json';
import Content2 from '../assets/data/CONTENTLISTINGPAGE-PAGE2.json';
import Content3 from '../assets/data/CONTENTLISTINGPAGE-PAGE3.json';
import {
  placeHolder,
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
} from '../styles/images';
import {ImageName, ShowContent} from '../types/modal/show_list';

export function getListDataItems(pageNo: number) {
  if (pageNo == 1) {
    return Content1;
  } else if (pageNo == 2) {
    return Content2;
  } else if (pageNo == 3) {
    return Content3;
  }
  return [];
}

export const getImageName = (imageName: string) => {
  const remove_after = imageName.indexOf('.');
  const result = imageName.substring(0, remove_after);
  switch (result) {
    case ImageName.poster1:
      return poster1;
    case ImageName.poster2:
      return poster2;
    case ImageName.poster3:
      return poster3;
    case ImageName.poster4:
      return poster4;
    case ImageName.poster5:
      return poster5;
    case ImageName.poster6:
      return poster6;
    case ImageName.poster7:
      return poster7;
    case ImageName.poster8:
      return poster8;
    case ImageName.poster9:
      return poster9;
    default:
      return placeHolder;
  }
};

export const searchShowItems = (items: ShowContent[], searchText: string) => {
  if (searchText && searchText.length > 0) {
    const filteredItems = items.filter(data =>
      data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
    );
    console.log(filteredItems);
    return filteredItems;
  }
  return items;
};
