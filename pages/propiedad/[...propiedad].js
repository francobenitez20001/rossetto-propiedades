import BannerSeccion from "../../components/Banner/bannerSeccion"
import Encabezado from "../../components/encabezado"
import { useRouter } from 'next/router'
import SliderPropiedad from "../../components/Propiedades/SliderPropiedad";
import styled from "styled-components";
import DatosPrincipales from "../../components/Propiedades/DatosPrincipales";
import DescripcionPropiedad from "../../components/Propiedades/Descripcion";
import ServiciosPropiedad from "../../components/Propiedades/Servicios";
import SliderPropiedades from "../../components/SliderPropiedades/Slider";
import FormBusqueda from "../../components/FormBusqueda/form";
import Footer from '../../components/Footer/footer';
import {useContext,useEffect} from 'react';
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { ContactoContext } from "../../context/contacto/contactoContext";
import Spinner from "../../components/Spinner";
import TituloDestacado from "../../components/tituloDestacado";
import FormContacto from "../../components/Contacto/form";

const Propiedad = (props) => {
  const router = useRouter();
  const {query:{propiedad:idInmueble}} = router;
  const {seleccionado,loading,error,traerInmueble} = useContext(InmuebleContext);
  const {data,traerInfo} = useContext(ContactoContext);

  useEffect(() => {
    if(idInmueble){
      if(seleccionado && idInmueble[0] != seleccionado.data.ID_INMUEBLE){
        traerInmueble(idInmueble[0]);
      }else if(!seleccionado){
        traerInmueble(idInmueble[0]);
      }
    }
  }, [idInmueble])

  useEffect(() => {
    if(!data){
      traerInfo();
    }
  }, []);

  return (
    <>
      <Encabezado title="Rosetto Propiedades - Inicio" description="Generated by create next app"/>
      <BannerSeccion seccion="Detalle propiedad"/>
      {!seleccionado || loading || !data ? <div className="text-center pt-5"><Spinner/></div> :
      <>
        {/* ver esto, esta llamadno a google fonts 2 veces */}
        <Encabezado title={`Rossetto propiedades ofrece ${seleccionado.data.OPERACION} - ${seleccionado.data.PARTIDO} - ${seleccionado.data.BARRIO}`} description={seleccionado.data.DESCRIPCION} url={window.location.href} facebook={data.facebook} image={seleccionado.data.HEADER}/>
        <div className="container pt-4">
          <Main className="row">
            <FotosPropiedad className="col-12 col-md-7">
              <TituloDestacado innerHtml={`${seleccionado.data.OPERACION} - ${seleccionado.data.PARTIDO} ${seleccionado.data.BARRIO === '-' ? '' : '- ' + seleccionado.data.BARRIO}`}/>
              <SliderPropiedad/>
            </FotosPropiedad>
            <div className="col-12 col-md-5">
              <DatosPrincipales/>
            </div>
          </Main>
          <hr/>
          <DescripcionPropiedad/>
          <ServiciosPropiedad/>
          <hr/>
          <TituloDestacado innerHtml="Consultar por esta propiedad"/>
          <FormContacto propiedad={seleccionado.data.ID_INMUEBLE}/>
        </div>
      </>
      }
      <br/><hr/><br/>
      <SliderPropiedades/>
      <br/>
      <FormBusqueda/>
      <Footer/>
    </>
  );
}

const Main = styled.div`
  align-items: center;
  @media(max-width:768px){
    align-items: flex-start
  }
`;

const FotosPropiedad = styled.div`
  height: 700px;
`;

export default Propiedad;
