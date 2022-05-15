import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left / cover
    no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewport }) => dontShowOnSmallViewport && `background: #232323;`}
    }
`;

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: spece-between;
    align-items: center;

    a {
        display: flex; 
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-wight: ${({ active }) => (active ==='true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        color:#3dd663;
        font-weight: bold;
        transition: all 0.2s;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;


export const SearchInput = styled.input`
    background-color: #464747;
    color: #fff;
    border: 1px solid #fff;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active}) => (active === true ? '10px' : '0')};
    padding: ${({ active}) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active}) => (active === true ? '1' : '0')};
    width: ${({ active}) => (active === true ? '200px' : '0px')};

    &:focus {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: #117bd8;
        cursor: pointer;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px; 
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: flex;
    background-color: #3dd663;
    width: 84px;
    height: fit-content;
    color: #fff;
    border: 0;
    font-weight: bold;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #117bd8; 
        color:#fff;
        font-weight: bold;
        transition: all 0.2s;
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src });
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    display: none;
    background-color: #111;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link} {
            cursor: pointer;
        }

        ${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Feature = styled(Container)`
    padding: 150px; 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const FeatureTitle = styled.h2`
    color: #fff;
    font-size: 50px;
    line-height: normal;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
    margin-bottom: 20px;
`;

export const Description = styled.p`
    color: #fff;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (max-width: 1449;) {
        height: 45px;
        width: 167px;
    }
`;

export const {PlayButton, ButtonViewMore}  = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(1, 1, 1, 0.35);
    background-color: #117bd8;
    color:#fff;
    font-weight: 700;
    border-width: 0;
    padding: 10px;
    border-radius: 5px;
    max-width: 130px;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 1s ease;

    &:hover {
    background-color: #e6e6e6;
    color: #000;
    transition: all 0.2s;
    }
`;
// #1683fb