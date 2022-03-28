import { FC } from "react";
import { IPost } from "../../../../models/post-model";
import EditIcon from "@mui/icons-material/Edit";
import styles from "./layout-post-for-page.module.scss";
import { DeletePost } from "../../../delete-post/delete-post";

interface LayoutPostForPageProps {
  post: IPost;
  isPostAuthor: boolean;
  activateEditMode: () => void;
  content: string;
}

const LayoutPostForPage: FC<LayoutPostForPageProps> = (props) => {
  const { post, isPostAuthor, activateEditMode, content } = props;
  return (
    <div>
      <div className={styles.post_header}>
        <div className={styles.name_author}>{post.nameAuthor}</div>
        {isPostAuthor && (
          <EditIcon sx={{ cursor: "pointer" }} onClick={activateEditMode} />
        )}
      </div>

      <div className={styles.content}>
        <div>{content}</div>
      </div>

      {isPostAuthor && (
        <div className={styles.delete_post_wrapper}>
          <DeletePost post={post} />
        </div>
      )}
    </div>
  );
};

export { LayoutPostForPage };
