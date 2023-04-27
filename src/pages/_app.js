import { ThemeProvider } from '@mui/material'
import Layout from '../components/Layout'
import theme from '@/themes'
import '@/styles/globals.css'
import '@/styles/home.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
