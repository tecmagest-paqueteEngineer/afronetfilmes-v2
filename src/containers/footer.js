import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
        <Footer.Title>Dúvidas? Contacte-nos.</Footer.Title>
        <Footer.Row>
            <Footer.Column>
                <Footer.Link href="#">FAQ </Footer.Link>
                <Footer.Link href="#">Relacionamento e Negócios</Footer.Link>
                <Footer.Link href="#">Como Assistir </Footer.Link>
                <Footer.Link href="#">Informações Corporativas</Footer.Link>
                <Footer.Link href="#">Filmes e Series </Footer.Link>
            </Footer.Column>

            <Footer.Column>
                <Footer.Link href="#">Centro de Suporte</Footer.Link>
                <Footer.Link href="#">Trabalhe Conosco</Footer.Link>
                <Footer.Link href="#">Termos de Uso</Footer.Link>
                <Footer.Link href="#">Contacte-nos</Footer.Link>
            </Footer.Column>

            <Footer.Column>
                <Footer.Link href="#">Criar Conta</Footer.Link>
                <Footer.Link href="#">Resgatar Cartões</Footer.Link>
                <Footer.Link href="#">Privacidade</Footer.Link>
                <Footer.Link href="#">Plano de Teste</Footer.Link>
            </Footer.Column>
            
            <Footer.Column>
                <Footer.Link href="#"> Central de Multimedia</Footer.Link>
                <Footer.Link href="#"> Comprar Cartões</Footer.Link>
                <Footer.Link href="#"> Cookies</Footer.Link>
                <Footer.Link href="#"> Notícias</Footer.Link>
            </Footer.Column>
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>AfronetFilmes</Footer.Text>
        </Footer>
    );
}