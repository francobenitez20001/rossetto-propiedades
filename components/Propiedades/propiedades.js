import CardPropiedad from "./CardPropiedad";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { useEffect, useContext } from "react";
import Spinner from "../Spinner";

const Propiedades = () => {
  const {data:propiedades,loading,error,traerInmuebles} = useContext(InmuebleContext);
  useEffect(() => {
    if(!propiedades.length){
      traerInmuebles();
    }
  }, []);

  if(error){
    return <div className="alert alert-danger">Error al obtener las propiedades, intente más tarde</div>
  }

  return (
    !propiedades.length || loading ?<div className="text-center"><Spinner/></div> :
    <div className="row">
      {propiedades.map((inmueble)=>(
        <div key={inmueble.ID_INMUEBLE} className="my-3 col-12 col-md-4">
          <CardPropiedad fullWidth="true"
                        idInmueble={inmueble.ID_INMUEBLE}
                        header={inmueble.HEADER}
                        partido={inmueble.PARTIDO}
                        barrio={inmueble.BARRIO}
                        dormitorios={inmueble.DORMITORIOS}
                        moneda={inmueble.MONEDA_PROPIEDAD}
                        precio={inmueble.PRECIO}/>
        </div>
      ))}
    </div>
  );
}

export default Propiedades;
