import { IClientOptions, ODataFields, SortDirection } from './ODataClientModels';

const baseApiUrl = process.env.NEXT_API_URL;

if (!baseApiUrl) {
  throw new Error(`The url of the API is not configured.
      Please check the configuration of your app and provide a valid url`);
}

const getQuery = <T>(options: IClientOptions<T>): string => {
  const queries: string[] = [];

  if (options?.fields?.length) {
    queries.push(`$select=${options.fields.join(', ')}`);
  }

  if (options?.filters?.length) {
    const filters = options.filters.map(([propertyName, value]) => `${String(propertyName)} eq ${value}`).join(', ');
    queries.push(`$filter=${filters}`);
  }

  if (options?.sorting?.length) {
    const sortings = options.sorting.map(
      ([propertyName, direction]) => `${String(propertyName)} ${direction === SortDirection.ASC ? 'asc' : 'desc'}`,
    );
    queries.push(`$orderby=${sortings.join(', ')}`);
  }

  if (typeof options?.itemsPerPage === 'number') {
    queries.push(`$top=${options.itemsPerPage}`);

    if (typeof options?.currentPage === 'number') {
      queries.push(`$skip=${options.currentPage * options.itemsPerPage}`);
    }
  }

  return queries.join('&');
};

const responseContainsFields = <T>(response: unknown, fields: ODataFields<T>): response is T =>
  fields.reduce((previous, field) => (response as any)[field] !== undefined && previous, true);

const getData = <T>(baseUrl: string) => {
  const requestConfig: RequestInit = {
    method: 'GET',
  };

  return async (options: IClientOptions<T>): Promise<T | undefined> => {
    try {
      const query = getQuery<T>(options);
      const url = `${baseUrl}?${query}`;
      const response = await fetch(url, requestConfig);
      const data: unknown = response.json();

      if (options?.fields?.length && !responseContainsFields<T>(response, options.fields)) {
        throw new Error(`The response does not contain all requested fields: '${options.fields.join(', ')}'`);
      }

      return data as T;
    } catch (error) {
      console.error(error);
      // TODO: DO SOMETHING TO DISPLAY ERRORS
      return undefined;
    }
  };
};

// TODO WAIT FOR DATA SEEDS TO BUILD THIS CLIENT
export const oDataClient = <T>(path: string) => {
  const baseUrl = `${baseApiUrl}${path}`;

  return {
    getData: getData<T>(baseUrl),
  };
};
