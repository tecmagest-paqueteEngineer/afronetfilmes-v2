import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer} from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
    return ( 
    <>
    <HeaderContainer> 
      <Feature>
        <Feature.Title>Plataforma Africana de Filmes & Séries.</Feature.Title>
        <Feature.SubTitle>Assista onde e quando quiser. Cancele a qualquer momento.*</Feature.SubTitle>
        <OptForm>
            <OptForm.Input placeholder="Digite seu email" />
            <OptForm.Button>Teste</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>Pronto para assistir? Informe seu email para criar, ou reinicie sua assinatura.</OptForm.Text> 
            <OptForm.Span>*Após 30 dias, o AfronetFilmes é renovado automaticamente por U$ 1,49/mês.</OptForm.Span>
        </OptForm>
      </Feature>
    </HeaderContainer>

    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
    </>
    );
}