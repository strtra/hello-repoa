export enum RequestMethod {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

const fetcher = async (
  url: string,
  method: RequestMethod,
  headers?: any,
  body?: any
) => fetch(url, { method, headers, body })
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => new Error(`Error fetching data: ${error}`));

export const fetchData = async <T>(
  url: string,
  method: RequestMethod,
  headers?: any,
  body?: any
): Promise<T> => new Promise((resolve, reject) => {
  fetcher(url, method, headers, body)
    .then((data: T) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});
