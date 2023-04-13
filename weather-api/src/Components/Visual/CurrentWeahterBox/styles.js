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

    background-color: blue;

    overflow-x: scroll;
`;



