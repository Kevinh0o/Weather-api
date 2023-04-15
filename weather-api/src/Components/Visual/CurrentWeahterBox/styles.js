import styled from "styled-components";

export const Wrap = styled.div `
    width: 500px;
    height: 430px;

    border-radius: 35px;

    background-color: #92E5FF;
`;

export const Header = styled.div `
    height: 20%;
    text-align: center;

    .WeatherIcon{
        width: 33%;
    }
    img{
        width: 100px;
        position: relative;
        top: 30px;
    }
`;

export const IconContainer = styled.div`
    width: 33%;
`;

export const FlexContainer = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const TemperatureText = styled.div `
    width: 33%;
`;

export const AditionalInfo = styled.div `
    width: 33%;
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
`;

export const Title = styled.div `
    height: 30%;

    text-align: center;
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



