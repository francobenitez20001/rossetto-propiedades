import styled from "styled-components";
import TituloDestacado from "../tituloDestacado";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { useContext } from "react";

const DescripcionPropiedad = () => {
  const {seleccionado:{data}} = useContext(InmuebleContext);
  return (
    <Contenedor>
      <TituloDestacado innerHtml="Datos generales"/>
      <p>{data.DESCRIPCION}</p>
    </Contenedor>
  );
}

const Contenedor = styled.section`
  >p{
    font-family: 'Open Sans',sans-serif;
    font-size: 17px;
    line-height: 1.8;
  }
`;

export default DescripcionPropiedad;
