import {FC, memo} from "react";
import { UsersList } from "../../components/list-users/list-users";


const HomePage: FC = memo(() => {

    return <div>
        Welcome to the club body
        <UsersList /> 
    </div>
})

export {HomePage}