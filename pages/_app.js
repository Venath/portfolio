import '../styles/globals.css'
import Header
 from './Header'
function MyApp({ Component, pageProps }) {
  return (
    <>
     
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
