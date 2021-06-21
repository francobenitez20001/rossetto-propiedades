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
      {data.OPERACION != 'Alquiler' ?
      <div className="alert alert-warning">
        <b>Atención:</b>
        <p>
          Las medidas declaradas son estimativas. El precio puede estar sujeto a modificaciones, debiendose consultar al corredor público inmobiliario. La venta de este inmueble esta sujeta a la tramitación del Codigo de Transferencia de Inmueble (COTI) de conformidad con la normativa vigente( AFIP 2371/08, 2439/08 y ccd) por parte del propietario.
        </p>
      </div>
      : null}
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
