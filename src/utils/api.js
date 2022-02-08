import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://james-news-app.herokuapp.com/api",
});

export const getArticles = (slug) => {
  return articlesApi
    .get(`/articles`, {
      params: {
        topic: slug,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getSingleArticle = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getComments = (article_id) => {
  return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const addVote = (article_id) => {
  return articlesApi
    .patch(`/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data;
    });
};
