import { faChargingStation, faFire, faPhoneAlt, faShower, faSnowflake, faStreetView, faWifi } from "@fortawesome/free-solid-svg-icons";
import TituloDestacado from "../tituloDestacado";
import CardServicio from "./CardServicio";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { useContext } from "react";

const ServiciosPropiedad = () => {
  const {seleccionado:{data}} = useContext(InmuebleContext);
  return (
    <section>
      <TituloDestacado innerHtml="Servicios"/>
      <div className="row">
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faChargingStation} servicio="electricidad" valor={data.TIENE_LUZ==1 ? 'si' : 'no'}/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faWifi} servicio="Internet" valor={data.TIENE_INTERNET==1 ? 'si' : 'no'}/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faFire} servicio="Gas" valor={data.TIPO_GAS == 'N' ? 'natural' : 'envasado'}/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faShower} servicio="Agua" valor={data.TIPO_AGUA == 'C' ? 'corriente' : 'pozo'}/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faSnowflake} servicio="Calefacción" valor={data.TIENE_CALEFACCION==1 ? 'si' : 'no'}/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faPhoneAlt} servicio="Telefono" valor={data.TIENE_TELEFONO==1 ? 'si' : 'no'}/>
        </div>
      </div>
    </section>
  );
}


export default ServiciosPropiedad;
