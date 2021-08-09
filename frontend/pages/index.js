// Main View
import Head from 'next/head';
import Basfooter from '../components/footer';
import PageTransition from '../components/Hoc/withTransition';
import MenuWrapper from '../components/menu/menu_wrapper';


import useApi from '../api/useApi';

// Home function which is task to view the create page
export default function Home() {
  let params = "params: {}"
  let func = 'providers'
  let query = `
    id
    userId
    provider_name
    service {
      id
      service_name
      providerId
      userId
    }
  `
  let gql = `
    { ${func}(${params}){
      ${query}
    }
  }
  `
  const { data, errors } = useApi(gql)


  return (
    <PageTransition>
      <Head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.jqueryFile }}></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.bannerFile }}></script>
        <title>BasFrontEnd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main__body" color='black' >
        <MenuWrapper/>
      </main>
      <footer className="main__footer">
        <Basfooter />
      </footer>
    </PageTransition>
  )
}


export default Home


