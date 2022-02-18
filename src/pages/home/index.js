import {Header} from "../../components/Header/Header";
import {About} from "../../components/About/About";
import '../../index.css';
import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
    let sourceRoutes = [
        {
            title: 'ЛР 10.1',
            path: '/lr/10_1',
        },
        {
            title: 'ЛР 13.1',
            path: '/lr/13_1',
        },
        {
            title: 'ЛР 13.2',
            path: '/lr/13_2',
        }
    ];
    return (
        <div className='app'>
            <Header brand='Компьютерные сети'/>
            <main className='main'>
                <h2>
                    Лабораторные:
                </h2>

                {sourceRoutes.map(item => {
                        return <li> <Link to={item.path}> {item.title} </Link> </li>
                    }
                )}

            </main>
        </div>
    );
}

export default HomePage;