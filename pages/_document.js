import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
	  <Html lang="en">
	  <Head>
	 	 <meta name="description" content="Bytevision Innovations: Your trusted partner for web development, branding, web maintenance, UI/UX design, and graphic design. Transforming ideas into impactful digital experiences." />
	  	<meta name="keywords" content="Bytevision Innovations, web development, branding, web maintenance, UI/UX design, graphic design, digital solutions" />
	  	<meta name="author" content="Bytevision Innovations" />
	  	<meta charSet="UTF-8" />
	          
	        {/* Favicon */}
	        <link rel="icon" href="/favicon.ico" />
	  </Head>
	  <body>
	  	<Main />
	  	<NextScript />
	  </body>
	  </Html>
  );
}
