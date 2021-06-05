import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";

const CardServicio = (props) => {
  return (
    <Card>
      <Header>
        <FontAwesomeIcon icon={props.icon}/>
      </Header>
      <Footer>{props.servicio}</Footer>
      <Valor valor={props.valor}>{props.valor}</Valor>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  height: 100px;
  box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 10px;
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  >svg{
    width: 30px;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-family: 'Open Sans',sans-serif;
  text-transform: uppercase;
  font-size: 14px;
`;

const Valor = styled.span`
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 11px;
  font-weight: bold;
  background-color: ${props=>(props.valor=='si')?'var(--maingreen)':'var(--primary)'};
  color: var(--white);
  text-transform: uppercase;
  padding: 2px 10px;
`;

export default CardServicio;
