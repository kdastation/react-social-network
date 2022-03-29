import { IPostToCreate } from "../../models/post-model";
import { addPostUser } from "../../services/api-service/posts-api-service";
import { appDispatch } from "../../redux/store";

export const createNewPost =
  (post: IPostToCreate) => async (dispatch: appDispatch) => {
    try {
      const newPost = await addPostUser(post);
    } catch {
      throw new Error("Ошибка добавления поста");
    }
  };
