import Encabezado from '../components/encabezado';
import Banner from '../components/Banner/banner';
import Categorias from '../components/Categorias/categorias';
import SliderPropiedades from '../components/SliderPropiedades/Slider';
import FormBusqueda from '../components/FormBusqueda/form';
import Footer from '../components/Footer/footer';
import { useEffect,useContext } from 'react';
import { InmuebleContext } from "../context/inmuebles/inmueblesContext";

export default function Home() {
  const {filtrando,restablecerFiltros} = useContext(InmuebleContext);
  useEffect(() => {
    if(filtrando){
      restablecerFiltros();
    }
  }, []);
  return (
    <>
      <Encabezado title="Rosetto Propiedades - Inicio" description="Sitio oficial de Rossetto Propiedades. EncontrĂ¡ la propiedad que buscas, todos nuestros conocimientos y herramientas a tu beneficio."/>

      <Banner>
        <FormBusqueda sinFondo={true}/>
      </Banner>
      <div className="container my-5">
        <Categorias/>
      </div>
      <SliderPropiedades/>
      <br/>
      <Footer/>
    </>
  )
}
