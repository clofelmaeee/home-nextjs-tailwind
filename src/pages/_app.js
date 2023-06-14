import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps, header }) {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content='Programming Articles' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
       <Header menus={header} /> 
      <main className="main flex flex-col">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
