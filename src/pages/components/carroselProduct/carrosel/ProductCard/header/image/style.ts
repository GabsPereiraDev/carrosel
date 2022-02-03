import styled from "styled-components";

export const Container = styled.div`
    img{
        width:15rem;
        height:15rem;
    }
  
    @media (max-width:500px){
        width:12rem;
       img{
        width:12rem;
        height:12rem;
       }  
    }
    @media (max-width:390px){
        width:10rem;
       img{
        width:10rem;
        height:8rem;
       }  
    }
  
`


