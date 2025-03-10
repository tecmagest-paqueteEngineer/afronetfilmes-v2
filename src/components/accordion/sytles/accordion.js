import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #232323;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;

`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: #fff;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Item = styled.div`
    color: #fff;
    margin-bottom: 10px;
    margin: auto;
    max-width: 728px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Header = styled.div`
   display: flex;
   justify-content: spece-between;
   cursor: pointer;
   margin-bottom: 1px;
   font-size: 26px;
   font-weight: normal;
   background: #333333;
   padding: 0.8em 1.2em 0.8em 1.2em;
   user-select: none;
   align-items: center;

   img {
       filter: brightness(0) invert(1)
       width: 24px;

       @media (max-width: 600px) {
           width: 16px;
       }
   }

   @media (max-width: 600px) {
       font-size: 16px;
   }
`;

export const Body = styled.div`
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    font-size: 26px;
    font-weight: normal;
    line-heigth: normal;
    background: #383838;
    padding: 0.8em 2.2em;
    wite-space: pre-wrap;
    user-select: none;
    overflow: hidden;

    &.closed {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
      }
      &.open {
        max-height: 1200px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
      }
      span {
        display: block;
        padding: 0.8em 2.2em 0.8em 1.2em;
      }

    @media (max-width: 600px) {
        font-size: 40px;
        line-height: 22px;
    }
`;