import styled from "styled-components";

export const Wrap = styled.div `
    margin-bottom: 20px;
    height: max-content;

    input{
        width: 255px;
        height: 43px;

        font-size: 20px;

        border: 1px solid #C0C0C0;
        border-radius: 17px;

        text-align: center;
    }
    input:focus{
        outline: none;
        border: 1px solid #686868;
    }

    ul{
        position: absolute;
        width: 255px;
        padding: 20PX;

        border: 1px solid #C0C0C0;
        border-radius: 17px;

        background-color: white;
    }
    li{
        list-style-type: none;
        margin-bottom: 10px;
    }

    a {
        color: black;
        text-decoration: none;

        font-size: 20px;
    }

    a:hover{
        color:#00A0C6; 
        text-decoration:none; 
        cursor:pointer;  
    }
`;
