import styled from 'styled-components/macro';

export const Container = styled.div``;


export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    margin: 0 20px;
`;


export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;

    video {
        height: 100%;
        width: 100%;
    }
`;

export const Close = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    width: 22px;
    height: 22px;
    opacity: 0.3;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    
    &:hover {
        opacity: 1;
    }
   
    &:before,
    &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
   }

   &:before {
    transform: rotate(45deg);
   }
   &:after {
    transform: rotate(-45deg);
   }
`;

export const Button = styled.button`
    background-color: #117bd8;
    border-color: #111; 
    width: 114px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        color: #e6e6e6;
        background-color: #1683fb;
    }
`;


