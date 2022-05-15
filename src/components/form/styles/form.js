import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(1, 1, 1, 0.75);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
`;

export const Error = styled.div`
    background: #ce0e0e;
    border-radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: #fff;
    padding: 15px 20px;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;

`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const Text = styled.p`
    color: #3dd663;
    font-size: 16px;
    font-weight: 500;
`;

export const TextSmall = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;


`;

export const Link = styled(ReactRouterLink)`
    color: #fff;
    Text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Input = styled.input`
    background: #464747;
    border-radius: 4px;
    height: 50px;
    border: none;
    border: 0;
    color: #e6e6e6;
    padding: 5px 20px;
    margin-bottom: 20px;
         
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

export const Submit = styled.button`
    background: #117bd8;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: none;
    color: #fff;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;