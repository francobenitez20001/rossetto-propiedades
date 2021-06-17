import styled from 'styled-components';
import Encabezado from '../components/encabezado';
import ListPropiedades from '../components/Propiedades/propiedades';
import Footer from '../components/Footer/footer';
import BannerSeccion from '../components/Banner/bannerSeccion';
import FormFiltroPropiedades from '../components/FormBusqueda/formFiltroPropiedades';
import {useContext,useEffect} from 'react';
import { InmuebleContext } from "../context/inmuebles/inmueblesContext";

export default function Propiedades() {
  const {filtrando} = useContext(InmuebleContext);
  return (
    <>
      <Encabezado title="Rosetto Propiedades - Propiedades" description="Generated by create next app"/>
      <BannerSeccion seccion="Propiedades"/>
      <Row className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3>mostrando propiedades: <span>{filtrando ? 'Según filtro aplicado': 'Más relevantes'}</span></h3>
          <select className="form-control">
            <option value="asc">Precios de menor al mayor</option>
            <option value="desc">Precios de mayor al menor</option>
          </select>
        </div>
        <hr/>
        <ListPropiedades/>
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
