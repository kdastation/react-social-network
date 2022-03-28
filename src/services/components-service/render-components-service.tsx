import { MenuItem } from "@mui/material";
import { CommentPost } from "../../components/comments-post/comment-post/comment-post";
import { ICity } from "../../components/forms/city-change-form/data-city";
import { Language } from "../../components/language/language";
import { UserItem } from "../../components/list-users/user-item/user-item";
import { Loader } from "../../components/loaders/loader";
import { Post } from "../../components/posts/post/post";
import { IComment } from "../../models/comment-model";
import { IPost } from "../../models/post-model";
import { IUserInformation } from "../../models/user-models/user-information-model";

export const renderLoading = (isLoading: boolean): JSX.Element | null => {
  const loader = isLoading ? <Loader /> : null;
  return loader;
};

export const renderError = (
  isLoading: boolean,
  errorMessage: string | null
): JSX.Element | null => {
  const error = errorMessage && !isLoading ? <div>{errorMessage}</div> : null;
  return error;
};

export const renderPost = (
  post: IPost,
  isAuth: boolean,
  userAvatar: string | undefined
): React.ReactNode => {
  return (
    <Post
      isAuth={isAuth}
      key={`${post.nameAuthor}_${post.id}`}
      post={post}
      userAvatar={userAvatar}
    />
  );
};

export const renderCommentPost = (comment: IComment): React.ReactNode => {
  return <CommentPost key={comment.id} comment={comment} />;
};

export const renderUserItem = (
  userInformation: IUserInformation
): React.ReactNode => {
  return (
    <UserItem key={userInformation.id} userInformation={userInformation} />
  );
};

export const renderPosts = (
  posts: IPost[],
  isAuth: boolean,
  userAvatar: string | undefined
): React.ReactNode[] => {
  return posts.map((post) => {
    return renderPost(post, isAuth, userAvatar);
  });
};

export const renderLanguage = (language: string) => {
  return <Language key={language} name={language} />;
};

export const renderCityInSelect = (city: ICity) => {
  return (
    <MenuItem key={city.name} value={city.name}>
      {city.name}
    </MenuItem>
  );
};
