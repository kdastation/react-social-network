import { useGetCommentsConcretePostQuery } from "../../redux/reducers-query/comments-reducer-query";
import { FC } from "react";
import { renderCommentPost } from "../../services/components-service/render-components-service";
import { List } from "../list/list";
import { FormCreateComments } from "../forms/form-create-comment/form-create-comment";
import { DefaultLoader } from "../loaders/default-loader/default-loader";

interface CommentsPostProps {
  idPost: number;
  isAuth: boolean;
}

//TODO: Доделать
const CommentsPost: FC<CommentsPostProps> = (props) => {
  const { idPost, isAuth } = props;
  const {
    isLoading,
    data: commentsData,
    error,
  } = useGetCommentsConcretePostQuery(idPost);

  const form = isAuth ? <FormCreateComments idPost={idPost} /> : null;
  return (
    <div>
      {isLoading && (
        <div>
          <DefaultLoader />
        </div>
      )}
      {!isLoading && commentsData && (
        <div>
          <List items={commentsData} renderItem={renderCommentPost} />
        </div>
      )}
      {form}
    </div>
  );
};

export { CommentsPost };
