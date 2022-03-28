import { Button } from "@mui/material";
import { FC } from "react";

interface LoadMoreButtonProps {
  loadMore: () => void;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = (props) => {
  const { loadMore } = props;
  return (
    <>
      <Button onClick={loadMore}>Загрузить еще</Button>
    </>
  );
};

export { LoadMoreButton };
