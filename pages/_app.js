import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import GlobalStyles from '../styles/globalStyles';


//states
import CategoriasState from '../context/categorias/categoriasState';
import ContactoState from '../context/contacto/contactoState';
import OperacionesState from '../context/operaciones/operacionesState';
import PartidosState from '../context/partidos/partidosState';

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles/>
    <ContactoState>
      <CategoriasState>
        <OperacionesState>
          <PartidosState>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PartidosState>
        </OperacionesState>
      </CategoriasState>
    </ContactoState>
  </>
}

export default MyApp
