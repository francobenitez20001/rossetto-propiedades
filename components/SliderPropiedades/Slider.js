import CardCategoria from '../Categorias/cardCategoria';
import SlideX from '../Sliders/slideX';

const SliderPropiedades = () => {
    return (
        <>
            <div className="container">
                <SlideX pageLength={3} classItem="boxSliderPropiedades" idSlider="slider-propiedades">
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 1"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 2"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 3"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 4"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 5"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 6"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 7"/>
                    </div>
                </SlideX>
            </div>
        </>
    );
}

export default SliderPropiedades;