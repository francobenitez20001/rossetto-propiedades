import CardPropiedad from '../Propiedades/CardPropiedad';
import SlideX from '../Sliders/slideX';
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import {useEffect,useContext} from 'react';
import Spinner from '../Spinner'

const SliderPropiedades = () => {
  const {destacadas,loading,error,traerDestacadas} = useContext(InmuebleContext);
  useEffect(() => {
    traerDestacadas();

  }, [])
  return (
      <>
          <div className="container">
              <h2>propiedades destacadas</h2>
              {!destacadas.length || loading ? <Spinner/> :
              <>
                <span className="d-block d-md-none">Arrastra hacia la izquierda para ver las propiedades</span>
                <SlideX pages={3} classItem="boxSliderPropiedades" idSlider="slider-propiedades">
                  {destacadas.map(inmueble=>(
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades" key={inmueble.ID_INMUEBLE}>
                        <CardPropiedad idInmueble={inmueble.ID_INMUEBLE}
                                        header={inmueble.HEADER}
                                        partido={inmueble.PARTIDO}
                                        barrio={inmueble.BARRIO}
                                        dormitorios={inmueble.DORMITORIOS}
                                        moneda={inmueble.MONEDA_PROPIEDAD}
                                        precio={inmueble.PRECIO}
                                        descripcion={inmueble.DESCRIPCION}
                                        categoria={inmueble.CATEGORIA}
                                        operacion={inmueble.OPERACION}/>
                    </div>
                  ))}
                </SlideX>
              </>
              }
          </div>
          <style jsx>{`
              h2{
                  text-transform: uppercase;
                  color: var(--primary);
                  font-weight: bold;
                  text-align:center;
              }
              span{
                  font-size: 12px;
                  font-weight: 600;
                  display: block;
                  text-align:center;
              }
          `}</style>
      </>
  );
}

export default SliderPropiedades;
