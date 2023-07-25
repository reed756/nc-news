import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://be-nc-news-diz4.onrender.com/api",
});

export const getArticles = (slug, sort_by, order) => {
  return articlesApi
    .get(`/articles`, {
      params: {
        topic: slug,
        sort_by: sort_by,
        order: order,
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
  return articlesApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
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

export const postComment = (article_id, username, body) => {
  return articlesApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return articlesApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
};

export const addVoteComment = (comment_id) => {
  return articlesApi
    .patch(`/comments/${comment_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data;
    });
};

export const getUsers = () => {
  return articlesApi.get("/users").then(({ data }) => {
    return data;
  });
};
