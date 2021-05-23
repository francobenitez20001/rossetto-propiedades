import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import CardCategoria from '../Categorias/cardCategoria';
import { Container, Flechas } from "./style";

const SliderPropiedades = () => {
    const [scroll, setScroll] = useState(1420);
    const back = (event)=>{
        const divs = document.querySelectorAll('.boxSliderPropiedades');
        for (let index = 0; index < divs.length; index++) {
            const element = divs[index];
            if(scroll==2840){
                element.style.transform = `translateX(0px)`;
            }else{
                element.style.transform = `translateX(-1420px)`;
            }
        }
        if(scroll == 2840){
            setScroll(1420);
            return;
        }
        setScroll(scroll - 1420);
    }

    const next = (event)=>{
        const divs = document.querySelectorAll('.boxSliderPropiedades');
        for (let index = 0; index < divs.length; index++) {
            const element = divs[index];
            element.style.transform = `translateX(-${scroll}px)`;
        }
        setScroll(scroll + 1420);
    }

    return (
        <>
            <Container className="container">
                <section className="propiedades">
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 1"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 2"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 3"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 4"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 5"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 6"/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 boxSliderPropiedades">
                        <CardCategoria categoria="Quinta" descripcion="asdasd 7"/>
                    </div>
                </section>
                <Flechas>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={()=>back(event)} style={{visibility:(scroll<=1420) ? 'hidden' : 'visible'}}/>
                    <FontAwesomeIcon icon={faArrowRight} onClick={()=>next(event)} style={{visibility:(scroll>=3800) ? 'hidden' : 'visible'}}/>
                </Flechas>
            </Container>
        </>
    );
}

export default SliderPropiedades;