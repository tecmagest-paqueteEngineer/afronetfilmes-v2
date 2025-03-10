import styled from 'styled-components/macro';

export const Title = styled.p`
    font-size: 24px;
    color: #e6e6e6;
    font-weight: bold;
    margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

    > ${Title} { 
        @media {max-width: 1000px} {
            margin-left: 30px
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const GroupMovie = styled.div`
    display: flex;
    flex-direction: ${({flexDirection}) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
    ${({margin}) => margin && `margin: ${margin}`};


    > ${Container}:last-of-type {
        @media (min-width: 1100px) {
            margin-top: -100px;
        }
    }
`;

export const SubTitle = styled.p`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`;

export const Description = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: #fff;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;

`;

export const MovieFeatureDescription = styled.p`
    font-size: 18px;
    color: #fff;
    font-weight: ${({fontWeight}) => fontWeight === 'bold' ? 'bold' : 'normal'};
    margin: 0;

    @media (max-width: 600px) {
        line-height: 22px;
    }
`;

export const MovieFeature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right:
    background-repeat: no-repeat;
    backgrund-color: rgba(0, 0, 0, 0.45);

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
    
    ${Title} {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 10px;
    }
    ${MovieFeatureDescription} {
        font-size: 14px;
    }
  }
`;

export const MovieFeatureTitle = styled(Title)`
    margin-left: 0;
    `;

export const MovieFeatureClose = styled.button`
    color: #fff;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    
    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;

export const Maturity = styled.div`
        background-color: ${({ rating }) => (rating = 15 ? '#f44336' : '#3dd663')};
        border-radius: 15px;
        width: 20px;
        padding: 5px;
        text-align: center;
        color: #fff;
        font-wight: 600;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        margin-right: 10px;
        font-size: 12px;
`;

export const Content = styled.div`
        margin: 56px;
        max-width: 500px;
        line-height: normal;

        @media (max-width: 1000px) {
            margin: 30px;
            max-width: none;
        }
`;

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Meta = styled.div`
    display: none;
    position: absolute;
    botton: 0;
    padding: 10px;
    background-color: #0000008f;
`;

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 305px;
    height: auto;
    padding: 0;
    margin: 0;
    cursor: pointer;
`;

export const Item = styled.div`
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        position: relative;
        cursor: pointer
        transition: transform: 0.2s;

    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }

    @media (min-width: 1200px) {
        &:hover ${Meta}, &:hover ${Description}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 56px;

        @media {max-width: 1000px}{
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-right: 56px;

        @media {max-width: 1000px}{
            margin-right: 30px;
        }
    }
`;


