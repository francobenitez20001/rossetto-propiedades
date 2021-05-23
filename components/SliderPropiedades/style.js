import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    >section{
        overflow-x: hidden;
        display: flex;
        padding: 20px 5px;
        position: relative;
        width: 100%;
        &:first-child{
            margin:0px 0px;
        }
        >div{
            transition: all .5s ease;
            margin:0px 20px;
            &.ocultar{
                left: -100%;
            }
        }
    }
`;

export const Flechas = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    >svg{
        width: 50px;
        background-color: var(--primary);
        color: var(--white);
        padding: 15px;
        border-radius: 25px;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    }
`;