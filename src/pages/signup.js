import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import {HeaderContainer} from '../containers/header';
import {FooterContainer} from '../containers/footer';
import {Form} from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password ==='' || emailAddress === '';
    
    const handleSignup = (event) => {
        event.preventDefault();

        return firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) => 
            result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 4) + 1,
            })
            .then(() => {
                history.push(ROUTES.BROWSE);
            }) 
        )
        .catch((error) => {
            setFirstName('')
            setEmailAddress('')
            setPassword('')
            setError(error.message);
        })
    };
    return (
        <>
        <HeaderContainer>
            <Form> 
            <Form.Title>NOVA CONTA</Form.Title>
            {error && <Form.Error>{error}</Form.Error> }

            <Form.Base onSubmit={handleSignup} method="POST">
                <Form.Input
                placeholder="Digite seu nome"
                value={firstName} 
                onChange={({target}) => setFirstName(target.value)}
                 />
                <Form.Input
                type="email" placeholder="Digite seu email"
                value={emailAddress}
                onChange={({target}) => setEmailAddress(target.value)}
                />
                <Form.Input 
                type="password" placeholder="Digite uma senha"
                value={password} 
                autoComplete="off" onChange={({target}) => setPassword(target.value)} 
                />
                <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">CRIAR CONTA</Form.Submit>
            </Form.Base>

                <Form.Text>
                    És usuário do AfronetFilmes? <Form.Link to="/signin">Entrar agora</Form.Link> 
                </Form.Text>
                <Form.TextSmall>Esta pagina é protegida, usamos reCPTCHA. Para garantir que você não é um robô.
                    Saiba mais.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    );
}