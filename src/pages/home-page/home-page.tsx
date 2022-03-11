import {FC} from "react";
import { UsersList } from "../../components/list-users/list-users";


const HomePage: FC = () => {

    return <div>
        Welcome to the club body
        <UsersList /> 
    </div>
}

export {HomePage}