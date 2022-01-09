import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import { RouteNames } from '../router';
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const router = useNavigate();
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify="end">
            {isAuth
                ? <>
                    <div style={{color: '#fff'}}>TV</div>
                   <Menu theme="dark" mode="horizontal" selectable={false}>

                        <Menu.Item onClick={() => console.log('123')}  key={1}>Выйти</Menu.Item>
                    </Menu>
                </>
                : <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => router(RouteNames.LOGIN)}  key={1}>Логин</Menu.Item>
                    </Menu>
            }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
