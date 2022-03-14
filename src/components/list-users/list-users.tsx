import { Pagination } from '@mui/material';
import { FC, memo} from "react";
import {renderUserItem } from "../../services/components-service/render-components-service";
import { useGetInformationAboutAllUsersQuery } from "../../redux/reducers-query/users-reducer-query";
import { List } from "../list/list";
import { useStandartPagination } from "../../hooks/standart-pagination-hook";
import { calculateQuantityOfPageNumbers } from '../../utils/utils';



//TODO: Доделать
const UsersList: FC = memo(() => {
    const {currentPage, changeCurrentPage} = useStandartPagination()
    const {isLoading, data} = useGetInformationAboutAllUsersQuery(currentPage)
 
    const users = !isLoading && data?.usersInformations ? 
                  <List items={data.usersInformations} renderItem={renderUserItem} />: null
    return (
        <div>
            {users}
            {
                data?.totalCount && <Pagination 
                                    count={calculateQuantityOfPageNumbers(data.totalCount, 5)}
                                    page={currentPage}
                                    onChange={changeCurrentPage} />
                
            }
        </div>
    )
})

export {UsersList}