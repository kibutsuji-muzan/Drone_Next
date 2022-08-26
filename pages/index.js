import Head from 'next/head'
import LastAdded from '/components/comman/lastadded'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LastAdded/>
    </div>
  )
}