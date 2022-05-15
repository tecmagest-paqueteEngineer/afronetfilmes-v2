import React from 'react';
import {Header, Profiles} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logoafronetfilmes.png';


export function SelectProfileContainer({user, setProfile}) { 
    return (
    <>
    <Header bg={false}>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="AfroneFilmes" />
        </Header.Frame>
    </Header>

    <Profiles>
        <Profiles.Title>Olá, quêm esta assistindo?</Profiles.Title>
        <Profiles.List>
            <Profiles.User 
            onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL
                 })}
                 data-testid="user-profile"
                >
                <Profiles.Picture src={user.photoURL} />
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
        </Profiles.List>
    </Profiles>
    </>
    );
}