import React from 'react';
import './App.css';

import {Header} from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import LabPage from './pages/lab';

class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <Header brand='Мицук Максим А-05-18'/>

                <main className='main'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route exact path='/lr/:id' element={<LabPage />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;
