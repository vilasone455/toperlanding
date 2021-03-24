import Head from "next/head";

import Header from './header';

import LightHeader from './LightHeader'

export default function Layout({ children, pageTitle, description , isLanding = false }) {
  return (
    <>
    
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      {isLanding ? <Header/> : <LightHeader/>}
    <main>
      {children}
    </main>


    </>
  );
}