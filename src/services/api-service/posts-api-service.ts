import { getCountItemsFromHeaders } from "./../../utils/utils-api";
import { IComment } from "./../../models/comment-model";
import { IPost, IPostToCreate } from "./../../models/post-model";
import axios from "axios";
import { apiUrlNames } from "./const-api-service";

const getAllPostsUser = async (
  nameUser: string,
  page: number = 3,
  filter: boolean = false
): Promise<{ posts: IPost[]; totalCountPosts: number }> => {
  const sortedBy = filter ? "desc" : "asc";
  const urlAddres = `${apiUrlNames.MAIN_URL}${
    apiUrlNames.URL_POSTS_USER
  }${nameUser}&_limit=${3}&_page=${page}${
    apiUrlNames.FILTERS_POSTS
  }${sortedBy}`;
  const response = await axios.get<IPost[]>(urlAddres);
  const totalCountPosts = getCountItemsFromHeaders(response);
  return {
    posts: response.data,
    totalCountPosts,
  };
};

const addPostUser = async (post: IPostToCreate) => {
  const response = await axios.post<IPost>(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_POSTS,
    post
  );
  return response.data;
};

const getCommentsPost = async (idPost: number): Promise<IComment[]> => {
  const response = await axios.get<IComment[]>(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_COMMENTS_POST + idPost
  );
  return response.data;
};

const getPost = async (idPost: number): Promise<IPost> => {
  const reponse = await axios.get<IPost>(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_POSTS + idPost
  );
  return reponse.data;
};

const deletePost = async (idPost: number) => {
  const response = await axios.delete(
    apiUrlNames.MAIN_URL + apiUrlNames.URL_POSTS + idPost
  );
};

const updatePost = async (post: IPost) => {
  await axios.put(apiUrlNames.MAIN_URL + apiUrlNames.URL_POSTS + post.id, post);
};

export {
  getAllPostsUser,
  addPostUser,
  getCommentsPost,
  getPost,
  deletePost,
  updatePost,
};
