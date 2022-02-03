import styled from "styled-components";






export const Card = styled.div`
    width: 15rem;
    height: 23rem;
    margin-bottom: 2rem;
    padding: 1rem;
    display: block;
   
    transform: translate3d(${props=>props.translate+'px'}, 0px, 0px);
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
    
    @media (max-width:1366px){
        padding: .5rem;
    }
    @media (max-width:960px){
        padding: 3.2rem;
        width:12.7rem;
      
    }
    @media (max-width:900px){
        padding: 2.5rem;
      
    }
    
    @media (max-width:810px){
        padding: 2rem;
    }
    @media (max-width:550px){
        padding: .6rem;
    }
    
    
    @media (max-width:450px){
        width:12rem;
    
        main{
            width:12rem;
            height: 7.5rem;
        }
    }
    @media (max-width:390px){
        width:10rem;
        padding: .7rem;
        main{
            width:10rem;
        }
    }
    &:hover .ContainerIcons{
        height: 3.2rem;
        transition: 0.6s;
    }
    transition: 0.6s;
`