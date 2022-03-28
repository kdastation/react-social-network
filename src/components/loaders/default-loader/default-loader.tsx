import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const DefaultLoader: FC = () => {
  return (
    <>
      <CircularProgress />
    </>
  );
};

export { DefaultLoader };
