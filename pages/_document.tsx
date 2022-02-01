import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  	static async getInitialProps(ctx: DocumentContext) {
    	const initialProps = await Document.getInitialProps(ctx)
    	
		return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
          	<title>Deniz Arca&apos;s Web Portfolio</title>
        	<Head>
				<meta charSet="utf-8" />
				{/** @TODO get all of below data from props */}
				<link rel="canonical" href="https://www.denizarca.com" />
				<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
				<link rel="shortcut icon" type="image/png" href="images/favicon.png"/>
				<link rel="shortcut icon" type="image/x-icon" sizes="192x192" href="images/favicon.ico"/>
				<link rel="apple-touch-icon" type="image/x-icon" href="images/favicon.ico"/>

				<meta name="author" content="Deniz Arca" />
				<meta name="keywords" content="Software, Engineer, Developer, Full Stack, FullStack, Backend, Frontend, DevOps" /> 
    			<meta name="description" content="Personal portfolio site with an edge on reuse, targetting individuals who are in need of web presence. SEO Ready, Accessible & Extensible, based in React!"/>   
			</Head>
        	<body>
          		<Main />
          		<NextScript />
        	</body>
      </Html>
    )
  }
}

export default MyDocument
