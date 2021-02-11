import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-screen h-full bg-brown-light px-14'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
