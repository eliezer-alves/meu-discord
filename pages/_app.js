function GlobalStyle() {
    return (
      <style global jsx>{`
	  	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Roboto+Mono:wght@300&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    )
  }