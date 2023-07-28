import './globals.css'
import { Poppins } from 'next/font/google'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'], })

export const metadata = {
  title: 'Magazine Inmobiliario',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
