import styled from 'styled-components/macro';

export const Container = styled.div`
    display; flex;
    justify-content;
    heigth; 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1000px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    max-width: 425px;
    width: 100%;
    padding: 10px;
    heigth: 70px;
    box-sizing: border-box;

`;

export const Break = styled.div`
    flex-basis: 100%;
    heigth: 0;
`;

export const Button = styled.button`
    display: flex;
    display: spece-between;
    align-items: center;
    heigth: 70px;
    background: #2bce4e;
    color: #fff;
    text-transform: uppercase;
    padding: 14px 18px;
    font-size: 25px;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
 
    &:hover {
        background: #117bd8;
        color: #fff;
        transition: all 0.2s;
    }

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    @media (max-width: 1000px){
        heigth: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;

    }    
`;

export const Text = styled.p`
    font-size: 19.2px;
    color: #3dd663;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const Span = styled.span`
    font-size: 19.2px;
    color: #fff;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;




