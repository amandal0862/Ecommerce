import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: var(--dark-grey);
    height: 100vh;
    width: 15%;
    position: fixed;
`;
export const Container = styled.div`
    background-color: var(--bg-color);
    width: 98%;
    height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
`;
export const Logo = styled.div`
    height: 6rem;
    width: 100%;
    // display:flex ;
    // justify-content: center;
    // align-items: center;
    padding: 20px;
    padding-left: 30px;
    // margin: 30px;
    user-select: none;
    cursor: pointer;

    img{
        height: 5rem;
        width: 5rem;
    }
    p{
        font-weight: 900;
        font-size: 2.5rem;
        margin-left: 1rem;
    }
`;
export const List = styled.ul`
    margin-top: 5rem;
    width: 100%;
`;
export const ListItem = styled.li`
    display:flex ;
    /* justify-content: center; */
    align-items: center;
    margin-top: 2rem;
    /* background-color: var(--dark-grey); */
    width: 90%;
    margin-left:auto ;
    padding:.7rem 0rem .7rem 1.5rem ;
    border-top-left-radius: 21px;
    border-bottom-left-radius: 11px;
    cursor: pointer;
    transition: all 0.2s;

    &.active{
        background-color: var(--dark-grey);
    }

    &:hover{
        background-color: var(--hover); 
    }

    img{
        height: 4rem;
        width: 4rem;
    }
    p{
        color: var(--font--black);
        font-size: 1.65rem;
        font-weight: 900;
        margin-left: 2rem;
        user-select: none;
    }
`;
export const Dis = styled.div`
    background: linear-gradient(150deg, #39ef74, #4600f1 100%);
    height: 15rem;
    width: 18rem;
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size:1.25rem;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    line-height: 2.5rem;
    border-radius: 21px;

    p{
        width: 80%;
    }
    span{
        background-color: #ececec6b;
        padding: .6rem;
        border-radius: 50%;
    }
`;
export const Auth = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5.5rem;
    /* display: none; */
    cursor: pointer;

    img{
        height: 4rem;
        width: 4rem;
    }
    p{
        color: var(--font--black);
        font-size: 1.65rem;
        font-weight: 900;
        
        margin-left: 1rem;
        user-select: none;
    }
`;