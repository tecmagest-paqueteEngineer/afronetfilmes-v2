import React from 'react';
import { Accordion} from '../components';
import OptForm from '../components/opt_form';
import fqsData from '../fixtures/faqs.json';

export function FaqsContainer(){
    return (
        <Accordion>
            <Accordion.Title>Perguntas Frequentes</Accordion.Title>
            {fqsData.map((item) => ( 
               <Accordion.Item key={item.id}>
                   <Accordion.Header>{item.header}</Accordion.Header>
                   <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
             ))}
            <Accordion.Item />

            <OptForm>
                <OptForm.Input placeholder="Digite seu email" />
                <OptForm.Buttom>Iniciar</OptForm.Buttom>
                <OptForm.Break />
                <OptForm.Text>Pronto para Assistir? Confirme seu email para criar, ou reinicie sua adesão.
                </OptForm.Text>
            </OptForm>
        </Accordion>
    );
}