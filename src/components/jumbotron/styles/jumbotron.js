import styled from 'styled-components/macro';

export const Item = styled.div`
    dispaly: flex;
    border-bottom: 8px solid #232323;
    padding: 50px; 50%;
    color: #fff;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin:auto;
    width: 100%;

    @media (max-width: 1000px){
        flex-direction: column;
    }
`;

export const Pane = styled.div`
    width: 500px;

    @media (max-width: 1000px){
        width: 100%;
        padding: 9 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media(max-width: 600px){
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-heitgth: normal;

    @(max-width: 600px) {
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100px;
    heitgth:auto;
`;

export const Container = styled.div`
    @media (max-width: 1000px){
        ${Item}:last-of-type h2 {
            margim-bottom: 50px;
        }
    }
`;