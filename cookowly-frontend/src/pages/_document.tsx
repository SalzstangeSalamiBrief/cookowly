import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="SalzstangeSalamiBrief & mrtndttmr" />
        <meta
          name="description"
          content="Cookowly is the platform dedicated to healthy cooking.
            You are searching for new Ideas? You want to create a list of recipes for the week?
            Cookowly provides you with the necessary tools."
        />
        <meta name="keywords" content="Cookowly,Cooking,Recipes,Recipe list,Health" />
        <meta name="color-scheme" content="dark" />
        {/* src favicon  https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body className="custom-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
