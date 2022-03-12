import { useSelector } from "react-redux"
import { PostsSelector } from "../selectors/posts-selector"

export const usePostsInformations = () => {
    const posts = useSelector(PostsSelector.getPosts)
    const isInitialLoading = useSelector(PostsSelector.getStatusInitialLoading)
    const isRealoding = useSelector(PostsSelector.getStatusReadloding)
    const totalCountPosts = useSelector(PostsSelector.getTotalCountPosts)
    return {
        posts,
        isInitialLoading,
        isRealoding,
        totalCountPosts
    }
}