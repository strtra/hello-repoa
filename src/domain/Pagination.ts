export type Pagination = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type ListWithPage<T> = {
  data: T[];
} & Pagination;
