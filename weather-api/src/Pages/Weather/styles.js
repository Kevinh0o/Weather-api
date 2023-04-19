import styled from "styled-components";

export const Wrap = styled.div `
`;
export const FlexContainer = styled.div `
    margin-top: 35px;
    
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 612px){
        width: 90vw;

        .center{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
`;
