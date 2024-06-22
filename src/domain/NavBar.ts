import homeIcon from '../assets/img/home.svg';
import tagsIcon from '../assets/img/tags.svg';
import activeIcon from '../assets/img/active.svg';
import AppPaths from '../AppRoutes';

export enum NavEnum {
  Home,
  Tags,
}

export type Nav = {
  key: NavEnum;
  label: string;
  iconUrl: string;
  activeIconUrl: string;
  linkTo: string;
};

export const NAVS: Nav[] = [
  {
    key: NavEnum.Home,
    label: 'Home',
    iconUrl: homeIcon,
    activeIconUrl: activeIcon,
    linkTo: AppPaths.HOME,
  },
  {
    key: NavEnum.Tags,
    label: 'Tags',
    iconUrl: tagsIcon,
    activeIconUrl: activeIcon,
    linkTo: AppPaths.TAGS,
  },
];

export const MOBILE_NAVS: Nav[] = [
  {
    key: NavEnum.Home,
    label: 'Home',
    iconUrl: homeIcon,
    activeIconUrl: activeIcon,
    linkTo: AppPaths.HOME,
  },
  {
    key: NavEnum.Tags,
    label: 'Tags',
    iconUrl: homeIcon,
    activeIconUrl: activeIcon,
    linkTo: AppPaths.TAGS,
  },
];
