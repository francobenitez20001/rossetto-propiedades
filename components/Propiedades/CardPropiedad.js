import styled from "styled-components";

const CardPropiedad = (props) => {
    return (
        <Card>
            <Header>
                <Foto src="https://www.blancopropiedades.com/imagen.php?i=c3JjL2ltZ191cC8xOTAzMjAyMV8xNjE2MTc0MTExLjAuanBlZw==%22"/>
            </Header>
            <Footer>
                <div>
                    <Lugar>Pilar - CAÑADA VILLAGE</Lugar>
                    <DatoExtra>Dormitorios: 2</DatoExtra>
                </div>
                <Price>
                    <span>U$S</span>
                    98.000
                </Price>
            </Footer>
        </Card>
    );
}

const Card = styled.div`
    position: relative;
    transition:all .3s ease;
    cursor: pointer;
    &:hover{
        filter: brightness(50%); // Más oscura
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    }
`;

const Header = styled.section`
    height: auto;
    max-height: 60%;
`;

const Foto = styled.img`
    width: 100%;
`;

const Lugar = styled.p`
    margin:0;
    text-transform: uppercase;
    color: var(--white);
`;

const DatoExtra = styled.p`
    margin:0;
    color: var(--white);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 12px;
`;

const Footer = styled.section`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--primary);
    padding: 5px 10px;
`;

const Price = styled.p`
    font-weight: 600;
    color: var(--white);
    font-size: 22px;
    margin:0;
`;

export default CardPropiedad;