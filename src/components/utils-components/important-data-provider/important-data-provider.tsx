import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
import { tryToInitiallyAuthorizeTheUser } from "../../../middlewares/auth-middleware/auth-middleware"

const ImportantDataProvider: FC = ({children}) => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(tryToInitiallyAuthorizeTheUser())
    },[])

    return (
        <>
          {children}  
        </>
    )
}

export {ImportantDataProvider}