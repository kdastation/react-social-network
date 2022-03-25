import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { IComment } from "../../../models/comment-model";
import { RoutesNames } from "../../../routes/consts-routes";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./comment-post.module.scss";

interface CommentPostProps {
  comment: IComment;
}

const CommentPost: FC<CommentPostProps> = memo((props) => {
  const { comment } = props;

  console.log("RENDER COMMENT");
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img
          src="https://rosomed2020.ru/sites/all/themes/campadmin/dist/default/assets/app/media/img/users/user-anonim.jpg"
          alt=""
        />
      </div>
      <div className={styles.main_content}>
        <div className={styles.top}>
          <div>
            <Link to={RoutesNames.PROFILE_PAGE + comment.nameAuthor}>
              {comment.nameAuthor}
            </Link>
          </div>
          <div>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.text_content}>{comment.content}</div>
      </div>
    </div>
  );
});

export { CommentPost };

{
  /* <div>
                {comment.nameAuthor}
            </div>
            <div>
                {comment.id}
            </div>
            <div>
                {comment.idPost}
            </div>
            <div>
                {comment.content}
            </div> */
}
