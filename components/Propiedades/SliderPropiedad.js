import SlideX from "../Sliders/slideX";

const SliderPropiedad = (props) => {
  return (
    <SlideX pages={5} classItem="imagenPropiedad" idSlider="slider-propiedad" indicators={[1,2,3,4,5]} idIndicadores="indicadores-propiedad">
      <div className="col-12 imagenPropiedad mx-2">
        <img src="https://images.unsplash.com/photo-1574330411208-9dbbec572fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" className="img-fluid"/>
      </div>
      <div className="col-12 imagenPropiedad mx-2">
        <img src="https://images.unsplash.com/photo-1574330411208-9dbbec572fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" className="img-fluid"/>
      </div>
      <div className="col-12 imagenPropiedad mx-2">
        <img src="https://images.unsplash.com/photo-1574330411208-9dbbec572fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" className="img-fluid"/>
      </div>
      <div className="col-12 imagenPropiedad mx-2">
        <img src="https://images.unsplash.com/photo-1574330411208-9dbbec572fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" className="img-fluid"/>
      </div>
      <div className="col-12 imagenPropiedad mx-2">
        <img src="https://images.unsplash.com/photo-1574330411208-9dbbec572fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" className="img-fluid"/>
      </div>
    </SlideX>
  );
}

export default SliderPropiedad;
