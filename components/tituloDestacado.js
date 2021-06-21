import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TituloDestacado = ({innerHtml}) => {
  return (
    <Span>
      <FontAwesomeIcon icon={faStar}/>
      <p>{innerHtml}</p>
    </Span>
  );
}

const Span = styled.span`
  display: flex;
  margin: 0px 0px 10px 0px;
  >svg{
    width: 20px;
    margin-right: 10px;
    color: var(--primary);
  }
  >p{
    margin: 0px;
    color: var(--secondary);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 25px;
    @media(max-width:768px){
      font-size: 18px;
    }
  }
`;

export default TituloDestacado;
