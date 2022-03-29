import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IPost } from "../models/post-model";
import { AuthSelector } from "../redux/selectors/auth-selector";
import { ParamPostPage } from "../routes/consts-routes";
import { getPost } from "../services/api-service/posts-api-service";
import { useFetch } from "./fetch-hook";

export const usePostPage = () => {
  const { idPost } = useParams<ParamPostPage>();
  const [dataPost, isLoading, error] = useFetch<IPost>(getPost, idPost);
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);
  const nameActiveUser = useSelector(AuthSelector.getUserName);
  const isPostAuthor = dataPost?.nameAuthor === nameActiveUser;

  return {
    idPost,
    isAuth,
    isPostAuthor,
    isLoading,
    error,
    dataPost,
  };
};
