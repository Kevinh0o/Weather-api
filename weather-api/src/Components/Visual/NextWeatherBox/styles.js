import styled from "styled-components";

export const Wrap = styled.div `
    width: 140px;
    height: 300px;

    border-radius: 35px;

    background: rgb(182,124,255);
    background: linear-gradient(0deg, rgba(182,124,255,1) 77%, rgba(0,212,255,1) 100%);
`;

export const Header = styled.div `
    height: 20%;
    border-radius: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconContainer = styled.div `
`;

export const Body = styled.div `
    height: 80%;

    border: 1px solid #C0C0C0;
    border-top: 0px;
    
    border-radius: 35px;

    background-color: white;

    text-align: center;

    p{
        background: -webkit-linear-gradient(339deg, rgba(20,0,255,1) 0%, rgba(235,0,133,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .max-temp{
        height: 30%;
        padding-top: 40px;

        font-size: 26px;
        font-weight: 700;
    }
    .min-temp{
        height: 20%;

        font-size: 20px;
        font-weight: 300;
    }
    .day{
        height: 50%;
        padding-top: 70px;

        font-size: 20px;
        font-weight: 700;
    }
`;



