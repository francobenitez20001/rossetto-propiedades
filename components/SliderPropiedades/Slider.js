import styled from 'styled-components';
import CardCategoria from '../Categorias/cardCategoria';
import SlideX from '../Sliders/slideX';

const SliderPropiedades = () => {
    return (
        <>
            <div className="container">
                <Titulo className="text-center">propiedades destacadas</Titulo>
                <Span className="text-muted">Arrastra hacia la izquierda para ver las propiedades</Span>
                <SlideX pageLength={3} classItem="boxSliderPropiedades" idSlider="slider-propiedades">
                    <div className="col-12 col-sm-6 col-md-3 boxSliderPropiedades mx-0">
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

const Titulo = styled.h2`
    text-transform: uppercase;
    color: var(--primary);
    font-weight: bold;
`;

const Span = styled.span`
    font-size: 12px;
    font-weight: 600;
    display: block;
    text-align:center;
`;

export default SliderPropiedades;