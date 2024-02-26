import { Switch, Route, Redirect } from 'react-router-dom'
import { publicRoutes, adminRoutes } from './Routes';
import { useContext } from 'react';
import { Context } from '../../index';

function AppRouter() {
    const { user } = useContext(Context);
    return (
        <Switch>
            {user.isAuth && adminRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={'/'} />
        </Switch>
    );
}

export default AppRouter;