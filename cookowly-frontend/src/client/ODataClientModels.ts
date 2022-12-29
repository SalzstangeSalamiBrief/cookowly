export enum SortDirection {
  ASC,
  DESC,
}

// TODO REMOVE LATER: https://www.odata.org/getting-started/basic-tutorial
// TODO REMOVE LATER: https://iterationinsights.com/article/how-to-paginate-an-odata-service-using-power-query/

export type ODataFields<T> = (keyof T)[];

export type ODataFilters<T> = [propertyName: keyof T, value: string][];

export type ODataSorting<T> = [propertyName: keyof T, direction: SortDirection][];

export interface IClientOptions<T> {
  /**
   * The fields to fetch from the entity
   */
  fields?: ODataFields<T>;
  /**
   * filter the data by these fields and their values
   */
  filters?: ODataFilters<T>;
  /**
   * how the data should be sorted
   */
  sorting?: ODataSorting<T>;
  /**
   * the number of items per page
   */
  itemsPerPage?: number;
  /**
   * the currently fetched page
   */
  currentPage?: number;
}
