import FormContacto from '../components/Contacto/form';
import InfoContacto from '../components/Contacto/info';
import Encabezado from '../components/encabezado';
import Footer from '../components/Footer/footer.js';
import BannerSeccion from '../components/Banner/bannerSeccion';
const Contacto = () => {
    return (
        <>
            <Encabezado title="Rossetto Propiedades - Contacto" description="Sitio oficial de Rossetto Propiedades. EncontrĂ¡ la propiedad que buscas, todos nuestros conocimientos y herramientas a tu beneficio."/>
            <BannerSeccion seccion="Contacto"/>
            <section className="container" style={{paddingTop:'100px'}}  id="contact">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <InfoContacto/>
                    </div>
                    <div className="col-12 col-md-7">
                        <FormContacto/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contacto;
