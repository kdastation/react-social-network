import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryToInitiallyAuthorizeTheUser } from "../../../async-thunks/auth-async-thunks/auth-async-thunks";
import { AuthSelector } from "../../../redux/selectors/auth-selector";

//TODO: Доделать
const ImportantDataProvider: FC = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(AuthSelector.getLoadingStatus);

  useEffect(() => {
    dispatch(tryToInitiallyAuthorizeTheUser());
  }, []);

  return <>{!isLoading ? children : <div>Loading...</div>}</>;
};

export { ImportantDataProvider };
