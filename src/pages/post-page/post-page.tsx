import { FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Post } from "../../components/posts/post/post";
import { useFetch } from "../../hooks/fetch-hook";
import { IPost } from "../../models/post-model";
import { ParamPostPage } from "../../routes/consts-routes";
import { AuthSelector } from "../../selectors/auth-selector";
import { PostChanges } from "../../components/post-changes/post-changes";
import { getPost } from "../../services/api-service/posts-api-service";

const PostPage: FC = () => {
  const { idPost } = useParams<ParamPostPage>();
  const [dataPost, isLoading, error] = useFetch<IPost>(getPost, idPost);
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);
  const nameActiveUser = useSelector(AuthSelector.getUserName);
  console.log(dataPost, isLoading, error, nameActiveUser);
  return (
    <div>
      {!isLoading && dataPost ? <Post isAuth={isAuth} post={dataPost} /> : null}
      {!isLoading && isAuth && dataPost?.nameAuthor === nameActiveUser ? (
        <PostChanges post={dataPost} />
      ) : null}
    </div>
  );
};

export { PostPage };
