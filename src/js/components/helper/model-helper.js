import { uniq } from 'lodash';

export const HTTP_ENDPOINT = 'http://localhost:8081/';
export const SEARCH_PLACEHOLDER ='Nunca pares de buscar';
export const PRODUCTS_NOT_FOUND = 'Products not found';
export const PRODUCT_NOT_FOUND = 'Product not found';

export const array_merge = array => uniq(
    array.reduce((a, b) => a.concat(b), [])
);