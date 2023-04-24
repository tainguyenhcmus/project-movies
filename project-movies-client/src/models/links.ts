export const CONSTANT_LINKS = {
  route_main: '/',
  route_movies_detail: '/movies_detail/:id',
  route_search_result: '/search_result',
  route_top_rated: '/top_rated',
  route_now_playing: '/now_playing',

};
export const getConstantLinkDetail = (link: string, value: string, alias = 'id') => {
  alias = `:${alias}`;
  return link.replace(alias, value + '');
};