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
  fields?: ODataFields<T>;
  filters?: ODataFilters<T>;
  sorting?: ODataSorting<T>;
  itemsPerPage?: number;
  currentPage?: number;
}
