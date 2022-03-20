import { FC } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../models/post-model";
import { RoutesNames } from "../../../routes/consts-routes";

interface DefaultPostProps {
  post: IPost;
}

const DefaultPost: FC<DefaultPostProps> = (props) => {
  const { post } = props;
  return (
    <div>
      <div>{post.nameAuthor}</div>
      <div>{post.content}</div>
      <Link to={`${RoutesNames.POST_PAGE_WITHOUT_PARAM + post.id}`}>
        Посмотреть пост детальнее
      </Link>
    </div>
  );
};

export { DefaultPost };
