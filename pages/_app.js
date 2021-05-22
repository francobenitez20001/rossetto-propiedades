import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </> 
}

export default MyApp
