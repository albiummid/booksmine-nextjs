import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }: { children: any }) {
  return (
    <main>
      <Head>
        <title>Booksmine</title>
      </Head>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </main>
  )
}
