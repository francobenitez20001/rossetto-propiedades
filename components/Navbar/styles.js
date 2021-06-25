import styled from "styled-components";

export const Nav = styled.nav`
    position:fixed;
    width:100%;
    z-index:1;
    background-color:var(--white);
    display:flex;
    align-items:center;
    border-top:5px solid var(--primary);
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    >header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:2px 0px;
        @media(max-width:768px){
            padding:10px;
        }
        >svg{
            display:none;
            @media(max-width:768px){
                display:block;
                color:var(--primary);
                width:20px;
                margin-right:5px;
            }
        }
    }
`;


export const ContenedorLogo = styled.div`
    width:240px;
`;

export const Botonera = styled.div`
    display:flex;
    align-items:center;
    z-index:3;
    >svg{
        display:none;
        @media(max-width:768px){
            display:block;
            width:20px;
            position:absolute;
            top:10px;
            left:25px;
            color:var(--white);
        }
    }
    @media(max-width:768px){
        position:fixed;
        top:0;
        left:-55%;
        height:100vh;
        width:50%;
        align-items:flex-start;
        background-color:var(--primary);
        box-shadow: 0px 2px 1px -1px rgba(2, 2, 2, 0.2), 0px 5px 1px 0px rgba(3, 3, 3, 0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
        transition:all .5s ease;
        &.show{
            left:0;
        }
    }
`;

export const List = styled.ul`
    list-style:none;
    margin:0px;
    padding:0px;
`;

export const Item = styled.li`
    display:inline-block;
    margin:0px 17px;
    cursor: pointer;
    &:last-child{
        margin: 0px 0px 0px 20px;
    }
    >span{
        font-size:14px;
        font-weight: 500;
        transition: all .5s ease;
        color:var(--secondary);
        &:hover{
            color:#353535;
            transition:all .5s ease;
        }
    }

    @media(max-width:768px){
        display:block;
        margin:50px 20px;
    }
`;

export const ItemActive = styled.div`
    width: 26px;
    background-color: var(--primary);
    height: 2px;
    transition:all .5 ease;
    @media(max-width:768px){
        background-color:var(--white);
    }
`;
