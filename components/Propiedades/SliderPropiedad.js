import SlideX from "../Sliders/slideX";
import { InmuebleContext } from "../../context/inmuebles/inmueblesContext";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const SliderPropiedad = (props) => {
  const {seleccionado:{imagenes}} = useContext(InmuebleContext);
  return (
    <SlideX
      pages={imagenes.length}
      classItem="imagenPropiedad"
      idSlider="slider-propiedad"
      height={575}
      indicators={imagenes}
      idIndicadores="indicadores-propiedad"
      sliderMobile={true}>
      {imagenes.map(img=>(
        <div className="col-12 imagenPropiedad mx-2" key={img.idImagen} style={{height:'100%'}}>
          <LazyLoadImage src={img.nombre} width="100%" effect="blur" height="100%"/>
        </div>
      ))}
    </SlideX>
  );
}

export default SliderPropiedad;
