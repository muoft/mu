import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/LineIcons.3.0.css';
import '../public/assets/css/animate.css';
import '../public/assets/css/tiny-slider.css';
import '../public/assets/css/glightbox.min.css';
import '../public/assets/css/main.css';

import Script from 'next/script';

export default ({ Component, pageProps }) => <>
	<Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
	<Script src="/assets/js/main.js" strategy="afterInteractive" />
	<Script src="/assets/js/form.js" strategy="afterInteractive" />
	<Component {...pageProps} />
</>