import { faEnvelope, faPhoneAlt, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";
import { useEffect,useContext } from "react";
import { ContactoContext } from "../../context/contacto/contactoContext";
import Spinner from '../Spinner';

const InfoContacto = () => {
  const {data,loading,error,traerInfo} = useContext(ContactoContext);
  useEffect(() => {
    if(!data){
      traerInfo();
    }
  }, [])
  return (
    !data ? <Spinner/> :
    <>
        <Titulo>Contactanos</Titulo>
        <Item>
            <IconArea>
                <FontAwesomeIcon icon={faSearchLocation}/>
            </IconArea>
            <Info>
                <Subtitle>Sucursal Pilar centro</Subtitle>
                <Descripcion>{data.direccion}</Descripcion>
            </Info>
        </Item>
        <Item>
            <IconArea>
                <FontAwesomeIcon icon={faPhoneAlt}/>
            </IconArea>
            <Info>
                <Subtitle>Teléfono</Subtitle>
                <Descripcion>{data.telefonoPrincipal}</Descripcion>
            </Info>
        </Item>
        <Item>
            <IconArea>
                <FontAwesomeIcon icon={faEnvelope}/>
            </IconArea>
            <Info>
                <Subtitle>Email</Subtitle>
                <Descripcion>giselarossetto@gmail.com</Descripcion>
            </Info>
        </Item>
    </>
  );
}

const Titulo = styled.h2`
    color: var(--primary);
    font-weight: 600;
    text-transform:uppercase;
    font-size: 25px;
    @media(max-width:768px){
      text-align: center;
    }
`;

const Item = styled.div`
    display: flex;
    padding: 27px 10px;
    align-items: center;
`;

const IconArea = styled.div`
    display: flex;
    align-items: center;
    >svg{
        width: 30px;
        color: var(--mainblue);
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:0px 0px 0px 20px;
`;

const Subtitle = styled.h4`
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--primary);
`;

const Descripcion = styled.span`
    font-size: 16px;
    line-height: 1.5;
    color: var(--secondary);
`;

export default InfoContacto;
