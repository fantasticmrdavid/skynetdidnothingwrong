import request from 'helpers/api';
import { ARTICLES_FETCHED } from 'Constants';

const fetchArticlesRequest = () => {
  return request('/somewhere');
};

export const fetchArticles = () => (dispatch) => {
  return fetchArticlesRequest()
    .then((res) => {
      dispatch({
        type: ARTICLES_FETCHED,
        posts: res.posts,
      });
    });
};
