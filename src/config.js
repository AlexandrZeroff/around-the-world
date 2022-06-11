const BASE_URL = 'https://restcountries.com/v3.1/'

export const ALL_CONTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region'

export const SEARCH_BY_COUNTRY  = (name) => BASE_URL + 'name/' + name

export const FILTER_BY_CODE = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',')