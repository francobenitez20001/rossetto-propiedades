import styled from "styled-components";

const CardCategoria = (props) => {
    return (
        <Card>
            <Header>
                <FotoCat src={"https://alejandrobm.com/wp-content/uploads/2020/07/Grilla-de-PortadaArtboard-2-copy.jpg"}/>
            </Header>
            <Body>
                <h3>{props.categoria}</h3>
                <span>{props.descripcion}</span>
            </Body>
            <Footer>
                <Boton>Ver publicaciones</Boton>
            </Footer>
        </Card>
    );
}

const Card = styled.div`
    position:relative;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    height:350px;
    background-color:var(--white);
    transition:box-shadow .3s ease;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        box-shadow: 2px 2px 2px 5px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 5px rgba(0,0,0,0.12);
    }
`;

const Header = styled.div`
    width:100%;
    height:50%;
`;

const FotoCat = styled.img`
    width:100%;
    max-height:175px;
`;

const Body = styled.section`
    padding:5px 10px;
    >h3{
        text-align:center;
        font-weight:600;
        font-size:22px;
        color:var(--mainblue);
    }

    >span{
        color:var(--primary)!important;
        font-weight:600;
        font-size:14px;
    }
`;

const Footer = styled.div`
    position:absolute;
    bottom:0;
    width:100%;
    padding:15px 0px;
    text-align:center;
`;

const Boton = styled.button`
    border:none;
    padding:9px 13px;
    border-radius:10px;
    background-color:var(--mainblue);
    color:var(--white);
    font-family:'Open Sans',sans-serif;
    font-size:12px;
    font-weight:bold;
    box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;
 
export default CardCategoria;