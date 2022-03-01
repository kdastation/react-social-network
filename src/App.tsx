import {FC} from 'react';
import './App.css';
import {AppRouter} from "./components/app-router/app-router";
import { Header } from './components/header/header';


const App: FC = () => {

  return (
        <div className='container'>
            <Header />
            <AppRouter/>
        </div>
  )
}



export {App}
