import { faBath, faBed, faCar, faMapMarkedAlt, faRulerCombined, faRulerHorizontal, faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {useContext} from 'react'
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";

const DatosPrincipales = (props) => {
  const {seleccionado:{data}} = useContext(InmuebleContext);

  return (
    <InfoContainer>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faMapMarkedAlt}/>
        </div>
        <span>{data.DIRECCION}</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faBed}/>
        </div>
        <span>Dormitorios: {data.DORMITORIOS}</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faBath}/>
        </div>
        <span>Baños: {data.BAÑOS}</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faCar}/>
        </div>
        <span>Cochera: {data.TIENE_COCHERA==1 ? 'SI' : 'NO'}</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faSwimmer}/>
        </div>
        <span>Pileta: {data.TIENE_PILETA==1 ? 'SI' : 'NO'}</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faRulerHorizontal}/>
        </div>
        <span>Sup. cubierta: {data.SUPERFICIE_CUBIERTA} {data.UNIDAD_MEDIDA}</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faRulerCombined}/>
        </div>
        <span>Sup. Terreno: {data.SUPERFICIE_TERRENO} {data.UNIDAD_MEDIDA}</span>
      </Dato>
    </InfoContainer>
  );
}

const InfoContainer = styled.aside`
  border-top: 1px solid var(--primary);

`;

const Dato = styled.div`
  display: flex;
  margin: 50px 0px;
  >div{
    display: flex;
    align-items: center;
    margin: 0px 25px 0px 0px;
  }
  >div>svg{
    width: 35px;
    color: var(--secondary);
  }
  >span{
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 600;
    font-family:'Open Sans',sans-serif;
    font-size:15px;
    color: var(--secondary);
  }
`;


export default DatosPrincipales;
