import React from 'react';
import '../../index.css';
import {Link, useParams} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {Lab10_1} from "../labs/lab10_1";
import {Lab13_1} from "../labs/lab13_1";
import {Lab13_2} from "../labs/lab13_2";
import {Button} from "antd";

function LabPage(props) {
    const params = useParams();
    const prodId = params.id;
    const labTitle = 'ЛР: ' + prodId;

    const dictLabs = {
        '10_1': <Lab10_1/>,
        '13_1': <Lab13_1/>,
        '13_2': <Lab13_2/>,
    }
    return (
        <div className='app'>
            <Header brand={labTitle}>
                <Link to='/'>
                    <Button>
                        Return
                    </Button>
                </Link>
            </Header>
            {dictLabs[prodId]}
        </div>
    );
}

export default LabPage;