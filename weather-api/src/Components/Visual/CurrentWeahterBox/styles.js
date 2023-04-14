import styled from "styled-components";

export const Wrap = styled.div `
    width: 500px;
    height: 430px;

    border-radius: 35px;
    box-shadow: 0px 10px 20px 0px grey;

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

    border-radius: 35px;

    background-color: white;
`;

export const Title = styled.div `
    height: 30%;

    text-align: center;
`;

export const ScrollX = styled.div `
    height: 70%;
    width: 100%;

    display: flex;
    justify-content: space-between;

    border-radius: 35px;

    overflow-x: scroll;
`;



