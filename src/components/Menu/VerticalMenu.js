import {Button, Menu, notification, Spin} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {Link, useNavigate} from "react-router-dom";
import React, {useCallback} from "react";
import {SmileOutlined} from '@ant-design/icons';
import {Lab10_1} from "../../pages/labs/lab10_1";
import {Lab13_1} from "../../pages/labs/lab13_1";
import {Lab13_2} from "../../pages/labs/lab13_2";

const {SubMenu} = Menu;

const openNotification = (message, description) => {
    notification.open({
        message: 'Вау, вы нажали на ' + message,
        description:
            description ?? 'Это классное окно нотификации',
        icon: <SmileOutlined style={{color: '#108ee9'}}/>,
    });
};

// const action = {
//     '5': openNotification('5'),
//     // '6': openNotification('6'),
//     // '7': openNotification('7'),
//     // '8': openNotification('8'),
//     // '9': <Link to='/lr/10_1'/>,
//     // '10': <Link to='/lr/13_1'/>,
//     // '11': window.location.reload(false),
//     // '12': <Link to='/'/>,
// };

function handleClick(e) {
    console.log('click', e);
    if (e.key === '5') {
        openNotification('5',)
    }
    if (e.key === '6') {
        openNotification('6')
    }
    if (e.key === '7') {
        openNotification('7', 'А это вообще вложенное поле')
    }
    if (e.key === '8') {
        openNotification('8', 'И это вложенное поле')
    }
    // if (e.key === '9') {
    //     return <Link to='/lr/10_1'/>
    // }
    // if (e.key === '10') {
    //     // <Link to='/lr/13_1'/>
    // }
    if (e.key === '11') {
        window.location.reload(false)
    }
    // if (e.key === '12') {
    //     <Link to='/'/>
    // }

}

export function VerticalMenu() {
    return (
        <Menu onClick={handleClick} style={{width: 256}} mode="vertical">
            {/*<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">*/}
            {/*    <Menu.ItemGroup title="Item 1">*/}
            {/*        <Menu.Item key="1">Option 1</Menu.Item>*/}
            {/*        <Menu.Item key="2">Option 2</Menu.Item>*/}
            {/*    </Menu.ItemGroup>*/}
            {/*    <Menu.ItemGroup title="Item 2">*/}
            {/*        <Menu.Item key="3">Option 3</Menu.Item>*/}
            {/*        <Menu.Item key="4">Option 4</Menu.Item>*/}
            {/*    </Menu.ItemGroup>*/}
            {/*</SubMenu>*/}
            <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<AppstoreOutlined/>} title="Навигация">
                <Link to='/lr/10_1'>
                <Menu.Item key="9">ЛР 10.1</Menu.Item>
                </Link>
                <Link to='/lr/13_1'>
                <Menu.Item key="10">ЛР 13.1</Menu.Item>
                </Link>
                <Menu.Item key="11">ЛР 13.2</Menu.Item>
                <Link to='/'>
                <Menu.Item key="12">Главная страница</Menu.Item>
                </Link>
            </SubMenu>
        </Menu>
    )
}