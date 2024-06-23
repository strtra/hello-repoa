import { fetchData, RequestMethod } from './fetcher';
import { FollowerList } from '../domain/Follower';
import { ResultCardList } from '../domain/ResultCard';
import { Tag } from '../domain/Tag';

export const getFollowers = (currentPage: number) => {
  const total = 100;
  const defaultPageSize = 20;
  const totalPages = Math.ceil(total / defaultPageSize);
  let curPage = currentPage;
  // reset page number to 1 to generate infinite data
  if (curPage > totalPages) {
    curPage = 1;
  }

  // TODO: cuz the image link of API expired, change to get images from static image folder
  return fetchData<FollowerList>(
    `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${curPage}&pageSize=${defaultPageSize}`,
    RequestMethod.GET
  );
};

export const getFollowings = (currentPage: number) => {
  const total = 48;
  const defaultPageSize = 20;
  const totalPages = Math.ceil(total / defaultPageSize);
  let curPage = currentPage;
  // reset page number to 1 to generate infinite data
  if (curPage > totalPages) {
    curPage = 1;
  }

  // TODO: cuz the image link of API expired, change to get images from static image folder
  return fetchData<FollowerList>(
    `https://avl-frontend-exam.herokuapp.com/api/users/friends?page=${curPage}&pageSize=${defaultPageSize}`,
    RequestMethod.GET
  );
};

export const searchResultCards = (
  keyword: string,
  pageSize: number,
  currentPage: number,
  currentTotal?: number
) => {
  let curPage = currentPage;
  if (currentTotal) {
    const totalPages = Math.ceil(currentTotal / pageSize);

    // reset page number to 1 to generate infinite data
    if (curPage > totalPages) {
      curPage = 1;
    }
  }

  // TODO:
  // 1. it seems the wrong API link, does not belong to the search results data
  // 2. cuz the image link of API expired, change to get images from static image folder
  return fetchData<ResultCardList>(
    `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${curPage}&pageSize=${pageSize}&keyword=${keyword}`,
    RequestMethod.GET
  );
};

export const getTags = () => fetchData<Tag[]>(
  'https://avl-frontend-exam.herokuapp.com/api/tags',
  RequestMethod.GET
);
