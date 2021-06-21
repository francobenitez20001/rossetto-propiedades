import styled from 'styled-components';
import Encabezado from '../components/encabezado';
import ListPropiedades from '../components/Propiedades/propiedades';
import Footer from '../components/Footer/footer';
import BannerSeccion from '../components/Banner/bannerSeccion';
import FormFiltroPropiedades from '../components/FormBusqueda/formFiltroPropiedades';
import {useContext} from 'react';
import { InmuebleContext } from "../context/inmuebles/inmueblesContext";
import FormContacto from '../components/Contacto/form';
import TituloDestacado from '../components/tituloDestacado';

export default function Propiedades() {
  const {filtrando,restablecerFiltros} = useContext(InmuebleContext);
  return (
    <>
      <Encabezado title="Rosetto Propiedades - Propiedades" description="Sitio oficial de Rossetto Propiedades. Encontrá la propiedad que buscas, todos nuestros conocimientos y herramientas a tu beneficio."/>
      <BannerSeccion seccion="Propiedades"/>
      <Row className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3>mostrando propiedades: <span>{filtrando ? 'Según filtro aplicado': 'Más relevantes'}</span></h3>
          <select className="form-control">
            <option value="asc">Precios de menor al mayor</option>
            <option value="desc">Precios de mayor al menor</option>
          </select>
        </div>
        {filtrando ? <BotonRestablecer onClick={()=>restablecerFiltros()}>Restablecer filtros</BotonRestablecer>:null}
        <hr/>
        <ListPropiedades/>
        <hr/>
        <TituloDestacado innerHtml="Contactanos"/>
        <FormContacto/>
      </Row>
      <FormFiltroPropiedades/>
      <Footer/>
    </>
  )
}

const Row = styled.main`
  padding-top: 50px;
  >div{
    >h3{
      font-size: 20px;
      color: var(--secondary);
      font-weight:600;
      text-transform: uppercase;
      margin: 0;
      >span{
        font-size: 18px;
        color: var(--primary);
        text-transform:uppercase;
        font-weight: bold;
      }
      @media(max-width:768px){
        font-size: 16px;
        text-align: center;
        margin-bottom: 5px;
        >span{
          font-size: 17px;
        }
      }
    }
    >select{
      width: 250px;
      @media(max-width:768px){
        width: 100%;
      }
    }
  }
`;

const BotonRestablecer = styled.button`
  border:none;
  padding:9px 13px;
  border-radius:10px;
  background-color:var(--primary);
  color:var(--white);
  font-family:'Open Sans',sans-serif;
  font-size:12px;
  font-weight:bold;
  box-shadow:0px 2px 1px -1px rgba(228, 224, 224, 0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;
