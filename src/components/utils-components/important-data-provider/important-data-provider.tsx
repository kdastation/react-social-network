import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tryToInitiallyAuthorizeTheUser } from "../../../middlewares/auth-middleware/auth-middleware";
import { AuthSelector } from "../../../selectors/auth-selector";

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
