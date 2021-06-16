import styled from "styled-components";
import Link from 'next/link';

const CardPropiedad = (props) => {
  const {idInmueble,header,partido,barrio,dormitorios,moneda,precio} = props;
  return (
    <Link href={`/propiedad/${idInmueble}`}>
      <Card width={props.fullWidth}>
          <Header>
              <img src={header} />
          </Header>
          <Footer>
              <div>
                  <Lugar>{partido} - {barrio}</Lugar>
                  <DatoExtra>Dormitorios: {dormitorios}</DatoExtra>
              </div>
              <Price>
                  <span>{moneda=='US' ? 'U$S' : '$'}</span>
                  {precio}
              </Price>
          </Footer>
      </Card>
    </Link>
  );
}

const Card = styled.div`
    position: relative;
    transition:all .3s ease;
    cursor: pointer;
    width: ${props=>props.width ? 'auto' : '95%'};
    margin: auto auto auto 0px;
    &:hover{
        filter: brightness(50%); // Más oscura
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    }
`;

const Header = styled.section`
    height: auto;
    max-height: 60%;
    text-align: center;
    >img{
        width: 100%;
    }
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
