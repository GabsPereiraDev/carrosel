import styled from "styled-components";






export const Card = styled.div`
    width: 15rem;
    height: 25rem;
    margin: 1rem;
    display: block;
   
    transform: translate3d(${props=>props.translate+'rem'}, 0px, 0px);
    transition: all .8s;

    header{
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    }

    main{
        width: 12rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin: 0;
    height: 7.4rem;
    hr{
        width: 100%;
        margin: 0;
        opacity: 0.5
    }
    }
`