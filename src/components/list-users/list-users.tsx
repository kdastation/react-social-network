import { FC, memo, useState } from "react";
import { renderUserItem } from "../../services/components-service/render-components-service";
import { useGetInformationAboutAllUsersQuery } from "../../redux/reducers-query/users-reducer-query";
import { List } from "../list/list";

//TODO: Доделать
const UsersList: FC = memo(() => {
    const [page, setPage] = useState(1)
    const {isLoading, data } = useGetInformationAboutAllUsersQuery(page)
    console.log(data)
    const users = !isLoading && data?.usersInformations ? 
                  <List items={data.usersInformations} renderItem={renderUserItem} />: null

    return (
        <div>
            {users}
            <button onClick={()=>setPage(page => page+1)}></button>
        </div>
    )
})

export {UsersList}