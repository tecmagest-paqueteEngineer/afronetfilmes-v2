import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logoafronetfilmes.png';

export function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="AfronetFilmes" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Entrar</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );

}