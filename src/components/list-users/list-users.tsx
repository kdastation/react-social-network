import { Pagination } from "@mui/material";
import { FC, memo } from "react";
import { renderUserItem } from "../../services/components-service/render-components-service";
import { useGetInformationAboutAllUsersQuery } from "../../redux/reducers-query/users-reducer-query";
import { List } from "../list/list";
import { useStandartPagination } from "../../hooks/standart-pagination-hook";
import { calculateQuantityOfPageNumbers } from "../../utils/utils";
import styles from "./list-users.module.scss";
import { DefaultLoader } from "../loaders/default-loader/default-loader";

//TODO: Доделать
const UsersList: FC = memo(() => {
  const { currentPage, changeCurrentPage } = useStandartPagination();
  const { isLoading, data } = useGetInformationAboutAllUsersQuery(currentPage);

  return (
    <div>
      {isLoading && (
        <div className={styles.loader_wrapper}>
          <DefaultLoader />
        </div>
      )}
      <div className={styles.wrapper}>
        {!isLoading && data?.usersInformations && (
          <List items={data.usersInformations} renderItem={renderUserItem} />
        )}
        {data?.totalCount && (
          <Pagination
            count={calculateQuantityOfPageNumbers(data.totalCount, 5)}
            page={currentPage}
            onChange={changeCurrentPage}
          />
        )}
      </div>
    </div>
  );
});

export { UsersList };
