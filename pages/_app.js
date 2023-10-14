import Layout from '@/Components/layout';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SSRProvider from 'react-bootstrap/SSRProvider';

export default function App({ Component, pageProps }) {

  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
