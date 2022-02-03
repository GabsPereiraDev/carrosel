import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;

article{
    width:94vw;
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
margin: 0 auto;
overflow: hidden;
}

.transaction{
    width:8rem;
    display: flex;
    justify-content:space-between;
}
@media (max-width:1000px){

    article{
        width:100vw;
    }

}


`

