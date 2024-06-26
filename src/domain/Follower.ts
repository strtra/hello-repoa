import { ListWithPage } from './Pagination';

export enum FollowerTab {
  Followers = 'FOLLOWERS',
  Following = 'FOLLOWING',
}

export type Follower = {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
};

export type FollowerList = ListWithPage<Follower>;
