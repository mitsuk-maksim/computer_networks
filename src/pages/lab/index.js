import React from 'react';
import '../../index.css';
import {useParams} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Lab10_1} from "../labs/lab10_1";

function LabPage(props) {
    const params = useParams();
    const prodId = params.id;
    const labTitle = 'ЛР: ' + prodId;

    return (
        <div className='app'>
        <Header brand={labTitle}/>
            <Lab10_1/>
        </div>
    );
}

export default LabPage;