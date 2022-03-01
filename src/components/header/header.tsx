import './header.css'
import { FC } from "react";
import { useSelector } from 'react-redux';
import { AuthSelector } from '../../selectors/auth-selector';
import { HeaderPublic } from './header-public/header-public';
import { HeaderPrivate } from './header-private/header-private';

const Header: FC = () => {

    const isAuth = useSelector(AuthSelector.getIsAuthStatus)

    const headerNavigation = isAuth ? <HeaderPrivate /> : <HeaderPublic />

    return (
        <div className='header-wrapper'>
            <div className="header-block">
                <div className="navigation">
                    <ul className='navigation-list'>
                          {headerNavigation}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {Header}