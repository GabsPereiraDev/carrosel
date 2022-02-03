import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:2.5rem;
height: 2.5rem;
border-radius: 3rem;
svg{
    height: 1.5rem;
    width:1.5rem;
    fill:#6c757d;
    transition:0.4s;
}
transition:0.4s;

&:hover{
    background:rgb(244,14,93);
    transition:0.4s;
    svg{
        fill:#fff;
        transition:0.4s;
    }
}

`;