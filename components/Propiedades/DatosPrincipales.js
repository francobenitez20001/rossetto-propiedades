import { faBath, faBed, faCar, faMapMarkedAlt, faRulerCombined, faRulerHorizontal, faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const DatosPrincipales = (props) => {
  return (
    <InfoContainer>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faMapMarkedAlt}/>
        </div>
        <span>Ruta 8 Km 74, Parada Robles, Exaltación de la Cruz</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faBed}/>
        </div>
        <span>Dormitorios: 3</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faBath}/>
        </div>
        <span>Baños: 2</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faCar}/>
        </div>
        <span>Cochera: Si</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faSwimmer}/>
        </div>
        <span>Pileta: Si</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faRulerHorizontal}/>
        </div>
        <span>Sup. cubierta: 150 metros cuadrados</span>
      </Dato>
      <Dato>
        <div>
          <FontAwesomeIcon icon={faRulerCombined}/>
        </div>
        <span>Sup. Total: 200 metros cuadrados</span>
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
