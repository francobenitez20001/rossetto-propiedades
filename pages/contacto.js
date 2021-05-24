import InfoContacto from '../components/Contacto/info';
import Encabezado from '../components/encabezado';
const Contacto = () => {
    return (
        <>
            <Encabezado title="Rossetto Propiedades - Contacto"/>
            <section className="container" style={{paddingTop:'100px'}}  id="contact">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <InfoContacto/>
                    </div>
                    <div className="col-12 col-md-6"></div>
                </div>
            </section>   
        </>
    );
}
 
export default Contacto;