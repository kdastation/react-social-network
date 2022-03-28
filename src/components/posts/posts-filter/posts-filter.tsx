import { FC } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface PostsFilterProps {
  changeFilter: () => void;
  filterStatus: boolean;
}

const PostsFilter: FC<PostsFilterProps> = (props) => {
  const { changeFilter, filterStatus } = props;
  return (
    <>
      {filterStatus ? (
        <ArrowDropUpIcon sx={{ cursor: "pointer" }} onClick={changeFilter} />
      ) : (
        <ArrowDropDownIcon sx={{ cursor: "pointer" }} onClick={changeFilter} />
      )}
    </>
  );
};

export { PostsFilter };
