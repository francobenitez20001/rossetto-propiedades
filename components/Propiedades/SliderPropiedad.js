import SlideX from "../Sliders/slideX";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { useContext } from "react";

const SliderPropiedad = (props) => {
  const {seleccionado:{imagenes}} = useContext(InmuebleContext);
  return (
    <SlideX
      pages={imagenes.length}
      classItem="imagenPropiedad"
      idSlider="slider-propiedad"
      indicators={imagenes}
      idIndicadores="indicadores-propiedad"
      sliderMobile={true}>
      {imagenes.map(img=>(
        <div className="col-12 imagenPropiedad mx-2" key={img.idImagen}>
          <img src={img.nombre} className="w-100"/>
        </div>
      ))}
    </SlideX>
  );
}

export default SliderPropiedad;
