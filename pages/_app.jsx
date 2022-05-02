import Layout from "../components/Layout";
import ThemeContext from "../context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext"
function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <ThemeContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContext>
    </AuthProvider>
  )
}

export default MyApp
