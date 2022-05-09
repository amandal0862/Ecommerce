import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: var(--dark-grey);
    height: 7rem;
    width: 85%;
    margin-left: 15%;
    display: flex;
    align-items: center;
    position: fixed;
    z-index:9999;
`;
export const Container = styled.div`
    background-color: var(--bg-color);
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const Choices = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10rem;

    p{
        font-size: 1.4rem;
        font-weight: 900;

        &:nth-child(1){
            margin-right:2.5rem;
        }
        &:nth-child(2){
            margin-left: -4.5rem;
        }
    }

`;
export const Cart = styled.div`
    /* height: 3rem;
    width: 3rem; */
    /* margin-left:60rem; */
    margin-right:7rem ;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 3.5rem;
        width: 3.5rem;
    }

    .quantity{
        position: absolute;
        top: 30%; 
        left: 40%;
        font-size: 9px;
        font-weight: bold;
        user
    }
`;
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-right:10rem ;

    .signIn{
        background-color:#001e3c;
        padding: 0.7rem 1rem;
        color: var(--bg-color);
        font-size: 1.6rem;
        font-weight: 400;
        text-transform: capitalize;
        margin-right: 1rem;
        cursor: pointer;
        border: 1px solid #001e3c;
    }
    .reg{
        background-color:transparent;
        padding: 0.7rem 1rem;
        color:#001e3c;
        font-size: 1.6rem;
        font-weight: 400;
        text-transform: capitalize;
        margin-right: 1rem;
        cursor: pointer;
        border: 1px solid #001e3c;
    }
`;