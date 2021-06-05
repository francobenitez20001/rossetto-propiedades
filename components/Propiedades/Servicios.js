import { faChargingStation, faFire, faPhoneAlt, faShower, faSnowflake, faStreetView, faWifi } from "@fortawesome/free-solid-svg-icons";
import TituloDestacado from "../tituloDestacado";
import CardServicio from "./CardServicio";

const ServiciosPropiedad = () => {
  return (
    <section>
      <TituloDestacado innerHtml="Servicios"/>
      <div className="row">
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faChargingStation} servicio="electricidad" valor="si"/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faWifi} servicio="Internet" valor="si"/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faFire} servicio="Gas" valor="Natural"/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faShower} servicio="Agua" valor="Corriente"/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faSnowflake} servicio="Calefacción" valor="si"/>
        </div>
        <div className="col-4 col-md-2 my-2">
          <CardServicio icon={faPhoneAlt} servicio="Telefono" valor="No tiene"/>
        </div>
      </div>
    </section>
  );
}


export default ServiciosPropiedad;
