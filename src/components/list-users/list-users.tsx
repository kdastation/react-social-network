import { FC } from "react";
import { renderUserItem } from "../../services/components-service/render-components-service";
import { useGetInformationAboutAllUsersQuery } from "../../redux/reducers-query/users-reducer-query";
import { List } from "../list/list";


const UsersList: FC = () => {

    const {isLoading, data, } = useGetInformationAboutAllUsersQuery(null)
    
    
    const users = !isLoading && data ? 
                  <List items={data} renderItem={renderUserItem} />: null

    return (
        <div>
            {users}
        </div>
    )
}

export {UsersList}