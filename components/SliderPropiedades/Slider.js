import CardCategoria from '../Categorias/cardCategoria';
import CardPropiedad from '../Propiedades/CardPropiedad';
import SlideX from '../Sliders/slideX';

const SliderPropiedades = () => {
    return (
        <>
            <div className="container">
                <h2>propiedades destacadas</h2>
                <span className="d-block d-md-none">Arrastra hacia la izquierda para ver las propiedades</span>
                <SlideX pageLength={3} classItem="boxSliderPropiedades" idSlider="slider-propiedades">
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades mx-1">
                        <CardPropiedad/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades mx-2">
                        <CardPropiedad/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades mx-2">
                        <CardPropiedad/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades mx-2">
                        <CardPropiedad/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades mx-2">
                        <CardPropiedad/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades mx-2">
                        <CardPropiedad/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades mx-2">
                        <CardPropiedad/>
                    </div>
                </SlideX>
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