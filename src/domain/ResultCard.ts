import { ListWithPage } from './Pagination';

export type ResultCard = {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
};

export type ResultCardList = ListWithPage<ResultCard>;
