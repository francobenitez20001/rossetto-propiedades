import styled from "styled-components";
import TituloDestacado from "../tituloDestacado";

const DescripcionPropiedad = () => {
  return (
    <Contenedor>
      <TituloDestacado innerHtml="Datos generales"/>
      <p>Casa a estrenar  hermoso y elegante diseño de 5 ambientes, 3 dormitorios con pileta y deck, cuenta con todos los servicios con llegada a su domicilio vía subterranea de agua corriente, cloacas, luz,  Tv por Cable, Internet.  Muy bien ubicada cerca de Colegio Northern International, Club Hípico Americano, El Kapawa Camp.  Tiene rápido acceso a autopista ruta 8.</p>
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
