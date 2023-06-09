import styled from "styled-components";

export const Wrap = styled.div `
    width: 650px;
    height: 430px;

    border-radius: 35px;

    background: rgb(182,124,255);
    background: linear-gradient(0deg, rgba(182,124,255,1) 77%, rgba(0,212,255,1) 100%);

    @media screen and (max-width: 612px){
        width: 90vw;
        height: 500px;
    }
`;

export const Header = styled.div `
    height: 20%;
    text-align: center;

    padding: 10px;
    
    text-shadow: 1px 4px 7px rgba(0,0,0, 0.30);

    img{
        width: 100px;
        position: relative;
        top: 0px;
    }
    @media screen and (max-width: 612px){
        img{
            top: 10px;
            left: 0px;
        }
    }
`;

export const IconContainer = styled.div`
    width: 33%;
    @media screen and (max-width: 612px){
        width: 66%;
    }
`;

export const FlexContainer = styled.div `
    height: 100%;
    
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 612px){
        .order:nth-child(1) {
        order: 2;
        }
        .order:nth-child(2) {
        order: 1;
        }
        .order:nth-child(3) {
        order: 3;
        }
    }
`;

export const TemperatureText = styled.div `
    width: 33%;

    display: flex;
    justify-content: center;

    color: white;
    font-weight: bold;

    .number{
        font-size: 64px;
    }
    .celcius{
        font-size: 30px;
        position: relative;
        top: 20px;
    }

    @media screen and (max-width: 430px){
        .number{
            font-size: 40px;
            align-self: center;
        }
    }
`;

export const AditionalInfo = styled.div `
    width: 33%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: white;
    font-weight: bold;

    .week{
        font-size: 16px;
    }
    .condition{
        font-size: 20px;
    }
    .time{
        font-size: 16px;
    }
`;

export const Body = styled.div `
    height: 80%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 35px;
    border: 1px solid #C0C0C0;
    border-top: 0px;

    background-color: white;

    p{
        background: -webkit-linear-gradient(339deg, rgba(20,0,255,1) 0%, rgba(235,0,133,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h1{
        background: -webkit-linear-gradient(339deg, rgba(20,0,255,1) 0%, rgba(235,0,133,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Title = styled.div `
    height: 30%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;

    h1{
        font-size: 32px;
    }
    p{
        font-size: 16px;
    }

    @media screen and (max-width: 612px){
        justify-content: end;
    }
`;

export const ScrollX = styled.div `
    height: 65%;
    width: 90%;

    display: flex;
    justify-content: space-between;

    border-radius: 35px;

    overflow-x: scroll;
    
    ::-webkit-scrollbar {
        height: 8px;
    }
 
    ::-webkit-scrollbar-track {
        background-color: #D9D9D9;
        border-radius: 50px;
    }
 
    ::-webkit-scrollbar-thumb {
        background-color: #848484;
        border-radius: 50px;
    }
`;



