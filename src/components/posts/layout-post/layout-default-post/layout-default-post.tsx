import { FC } from "react";
import { IPost } from "../../../../models/post-model";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { Button } from "@mui/material";
import { MorePostMenu } from "../../more-post-menu/more-post-menu";
import styles from "./layout-default-post.module.scss";

interface DefaultPostProps {
  post: IPost;
  userAvatar?: string;
  visibleComments?: any;
}

const DefaultPost: FC<DefaultPostProps> = (props) => {
  const { post, userAvatar, visibleComments } = props;
  return (
    <div className={styles.post_wrapper}>
      <div className={styles.post_header}>
        <div className={styles.post_left_header}>
          <div className={styles.post_user_avatar}>
            <img src={userAvatar} alt="user_avatar" />
          </div>
          <div>
            <div>{post.nameAuthor}</div>
            <div>11 марта 2021 13:44</div>
          </div>
        </div>
        <div>
          <MorePostMenu idPost={post.id} />
        </div>
      </div>
      <div className={styles.post_content}>{post.content}</div>
      <div>
        <div>
          <Button onClick={visibleComments} startIcon={<ModeCommentIcon />}>
            comments
          </Button>
        </div>
      </div>
    </div>
  );
};

export { DefaultPost };
