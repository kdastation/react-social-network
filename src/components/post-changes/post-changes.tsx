import { FC } from "react";
import { DeletePost } from "./delete-post/delete-post";
import { IPost } from "../../models/post-model";

interface PostChangesProps {
  post: IPost;
}

//TODO: Доделать
const PostChanges: FC<PostChangesProps> = (props) => {
  const { post } = props;

  return (
    <div>
      <DeletePost post={post} />
    </div>
  );
};
export { PostChanges };
