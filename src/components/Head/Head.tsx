import Head from 'next/head';

const HeadHtml = () => {
   return (
      <Head>
         <title>0/1 COMBINE</title>
         <meta name='description' content='0/1 COMBINE' />
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <link rel='icon' href='assets/favicon/favicon.ico' />

         {/*favicons*/}
         <link rel='apple-touch-icon' sizes='180x180' href='assets/favicon/apple-touch-icon.png' />
         <link rel='icon' type='image/png' sizes='32x32' href='assets/favicon/favicon-32x32.png' />
         <link rel='icon' type='image/png' sizes='16x16' href='assets/favicon/favicon-16x16.png' />
         <link rel='manifest' href='assets/favicon/site.webmanifest' />
         <link rel='mask-icon' href='assets/favicon/safari-pinned-tab.svg' color='#ffd500' />
         <link rel='shortcut icon' href='assets/favicon/favicon.ico' />
         <meta name='msapplication-TileColor' content='#da532c' />
         <meta name='msapplication-config' content='assets/favicon/browserconfig.xml' />
         <meta name='theme-color' content='#ffd500' />
      </Head>
   );
};

export default HeadHtml;
