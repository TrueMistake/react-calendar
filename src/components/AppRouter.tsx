import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router';
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />)
                }
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
              </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />)
                }
                <Route
                    path="*"
                    element={<Navigate to="/login" />}
                />
              </Routes>

    );
};

export default AppRouter;
