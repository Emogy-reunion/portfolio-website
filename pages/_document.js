import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
	  <Html lang="en">
	  <Head>
	 	 <meta name="description" content="Bytevision Innovations: Your trusted partner for web development, branding, web maintenance, UI/UX design, and graphic design. Transforming ideas into impactful digital experiences." />
	  	<meta name="keywords" content="Bytevision Innovations, web development, branding, web maintenance, UI/UX design, graphic design, digital solutions" />
	  	<meta name="author" content="Bytevision Innovations" />
	  	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  	<meta charSet="UTF-8" />

	  	{/* Open Graph Meta Tags */}
	  	<meta property="og:title" content="Bytevision Innovations - Digital Solutions Redefined" />
	  	<meta property="og:description" content="Providing top-notch web development, branding, web maintenance, UI/UX design, and graphic design services. Let Bytevision Innovations elevate your digital presence." />
	  	<meta property="og:image" content="https://bytevision.markmugendi.tech/images/bytevision-og-image.jpg" />
	        <meta property="og:url" content="https://bytevisioninnovations.com" />
	        <meta property="og:type" content="website" />
	          
	        {/* Twitter Card Meta Tags */}
	        <meta name="twitter:card" content="summary_large_image" />
	        <meta name="twitter:title" content="Bytevision Innovations - Digital Solutions Redefined" />
	        <meta name="twitter:description" content="Providing top-notch web development, branding, web maintenance, UI/UX design, and graphic design services. Let Bytevision Innovations elevate your digital presence." />
	        <meta name="twitter:image" content="https://bytevision.markmugendi.tech/images/bytevision-twitter-image.jpg" />
	          
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
