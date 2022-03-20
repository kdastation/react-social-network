import { usePaginationButton } from "./pagination-button-hook";
import { useEffect, useState } from "react";
import { IPost } from "../models/post-model";
import { getAllPostsUser } from "../services/api-service/posts-api-service";

//TODO: Доделать
export const usePosts = (nameUser: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCanFetching, setIsCanFetching] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalCountPosts, setTotalCountPosts] = useState<number>(0);
  const {
    currentPage,
    loadMoreItems,
    resetCurrentPage,
    quantityOfPageNumbers,
    isCanDownloadMore,
  } = usePaginationButton(totalCountPosts, 3, 1);
  const [filter, setFilter] = useState(false);
  const isANeedFilter = quantityOfPageNumbers > 1;
  useEffect(() => {
    if (isCanFetching) {
      setIsLoading(true);
      getAllPostsUser(nameUser, currentPage, filter).then((data) => {
        setPosts([...posts, ...data.posts]);
        setTotalCountPosts(data.totalCountPosts);
        setIsLoading(false);
      });
    }
  }, [nameUser, currentPage, filter, isCanFetching]);

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

  return {
    isLoading,
    posts,
    isANeedFilter,
    isCanDownloadMore,
    loadMorePosts: loadMoreItems,
    changeFilter,
  };
};
