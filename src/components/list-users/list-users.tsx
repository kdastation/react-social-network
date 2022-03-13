import { FC, memo} from "react";
import { renderUserItem } from "../../services/components-service/render-components-service";
import { useGetInformationAboutAllUsersQuery } from "../../redux/reducers-query/users-reducer-query";
import { List } from "../list/list";
import { Pagination } from "../pagination/pagination";
import { useStandartPagination } from "../../hooks/standart-pagination-hook";



//TODO: Доделать
const UsersList: FC = memo(() => {
    const {currentPage, changeCurrentPage} = useStandartPagination()
    const {isLoading, data} = useGetInformationAboutAllUsersQuery(currentPage)
    
    const users = !isLoading && data?.usersInformations ? 
                  <List items={data.usersInformations} renderItem={renderUserItem} />: null

    const paginationPosts = data?.totalCount ? 
                          <Pagination totalCountItems={data.totalCount} 
                                      currentPage={currentPage}
                                      limit={5}
                                      changeCurrentPage={changeCurrentPage} /> : null 
    return (
        <div>
            {users}
            {paginationPosts}
        </div>
    )
})

export {UsersList}