import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps, header }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content='Programming Articles' />
      </Head>
      <Header menus={header} />
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
