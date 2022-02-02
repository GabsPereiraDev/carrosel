import styled from "styled-components";

interface IPromotion{
    promotion:boolean
}

export const Container = styled.p<IPromotion>`
margin:0;
margin-left:${props=>props.promotion? '.5rem': ''} ;
color:#000;
font-weight: ${props=>props.promotion? 'bold': 'normal'};
font-size: ${props=>props.promotion? '.8rem': '1.1rem'};
line-height: 16px;
opacity: ${props=>props.promotion? '0.7': '1'};
text-decoration:${props=>props.promotion? 'line-through': 'normal'};



`