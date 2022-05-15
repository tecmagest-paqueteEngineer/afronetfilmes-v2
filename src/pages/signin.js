import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    
    const handleSignin = (event) => {
        event.preventDefault();

        firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            history.push(ROUTES.BROWSE);
        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    return (
        <>
        <HeaderContainer>
        <Form>
            <Form.Title>Seja bem vindo(a)</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
        
        <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input 
            type="email"
            placeholder="Digite seu email"
            value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}
            />
              <Form.Input
              type="password" 
              placeholder="Digite sua senha" 
              autoComplete="off" 
              value={password}onChange={({target}) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">ENTRAR</Form.Submit>
        </Form.Base>
            <Form.Text>
            Novo no AfronetFilmes?<Form.Link to="/signup"> Criar conta agora</Form.Link>
            </Form.Text>
            <Form.TextSmall>Esta pagina é protegida. Usamos reCPTCHA, para garantir que você não é um robô.
            Saiba mais.</Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}