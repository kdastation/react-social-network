import { usePaginationButton } from "./pagination-button-hook";
import { useEffect, useState } from "react";
import { IPost } from "../models/post-model";
import { getAllPostsUser } from "../services/api-service/posts-api-service";
import { useFetching } from "./fetching-hook";

//TODO: Доделать
export const usePosts = (nameUser: string) => {
  const [isCanFetching, setIsCanFetching] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalCountPosts, setTotalCountPosts] = useState<number>(0);
  const [filter, setFilter] = useState(false);

  const {
    error,
    fetching: fetchPosts,
    isLoading,
    isFetching,
  } = useFetching(async () => {
    const receviedPosts = await getAllPostsUser(nameUser, currentPage, filter);
    setPosts([...posts, ...receviedPosts.posts]);
    setTotalCountPosts(receviedPosts.totalCountPosts);
  });

  const {
    currentPage,
    loadMoreItems,
    resetCurrentPage,
    quantityOfPageNumbers,
    isCanDownloadMore,
  } = usePaginationButton(totalCountPosts, 3, 1);

  const changeFilter = () => {
    setIsCanFetching(false);
    setFilter(!filter);
    resetState();
    setIsCanFetching(true);
  };

  const resetState = () => {
    setPosts([]);
    resetCurrentPage();
    setTotalCountPosts(0);
  };

  useEffect(() => {
    setIsCanFetching(false);
    resetState();
    setIsCanFetching(true);
  }, [nameUser]);

  useEffect(() => {
    if (isCanFetching) {
      fetchPosts();
    }
  }, [currentPage, filter, isCanFetching]);

  const isANeedFilter = quantityOfPageNumbers > 1;

  return {
    loadMorePosts: loadMoreItems,
    changeFilter,
    isLoading,
    posts,
    isANeedFilter,
    isCanDownloadMore,
    totalCountPosts,
    filterStatus: filter,
    error,
    isFetching,
  };
};
