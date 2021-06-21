import Router from "next/router";
import styled from "styled-components";

const CardCategoria = (props) => {
    return (
        <Card>
            <Header>
                <FotoCat src={props.foto} alt={`${props.categoria} en Pilar y alrededores. Rossetto propiedades`}/>
                <h3>{props.categoria}</h3>
            </Header>
            <Body>
            </Body>
            <Footer>
                <Boton onClick={()=>Router.push(`/propiedades/${props.categoria.toLowerCase()}`)}>Ver publicaciones</Boton>
            </Footer>
        </Card>
    );
}

const Card = styled.div`
    position:relative;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background-color:var(--white);
    transition:box-shadow .3s ease;
    cursor: pointer;
    height: 225px;
    //border-radius: 10px;
    &:hover{
        box-shadow: 2px 2px 2px 5px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 5px rgba(0,0,0,0.12);
    }
`;

const Header = styled.div`
    width:100%;
    height:70%;
    position: relative;
    background-color: rgba(0,0,0,0);
    opacity: 0.99;
    >h3{
        position: absolute;
        top:50%;
        left: 0;
        right: 0;
        text-align:center;
        font-weight:600;
        font-size:22px;
        color:var(--white);
    }
`;

const FotoCat = styled.img`
    width:100%;
    filter: brightness(30%); // Más oscura
    object-fit: cover;
    height: 100%;
`;

const Body = styled.section`

`;

const Footer = styled.div`
    position:relative;
    bottom:0;
    width:100%;
    padding:15px 0px;
    text-align:center;
`;

const Boton = styled.button`
    border:none;
    padding:9px 13px;
    border-radius:10px;
    background-color:var(--primary);
    color:var(--white);
    font-family:'Open Sans',sans-serif;
    font-size:12px;
    font-weight:bold;
    box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export default CardCategoria;
