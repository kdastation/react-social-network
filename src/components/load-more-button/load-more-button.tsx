import { Button } from "@mui/material";
import { FC } from "react";

interface LoadMoreButtonProps {
  loadMore: () => void;
  isFetching: boolean;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = (props) => {
  const { loadMore, isFetching } = props;
  return (
    <>
      <Button disabled={isFetching} onClick={loadMore}>
        Загрузить еще
      </Button>
    </>
  );
};

export { LoadMoreButton };
