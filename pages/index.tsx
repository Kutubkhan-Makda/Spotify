import type { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Center from '../Components/Center'
import Player from '../Components/Player'
import Sidebar from '../Components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex'>
        <Sidebar/>
        <Center/>
      </main>
      <div className='sticky bottom-0'>
        <Player/>
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context:any){
  const session = await getSession(context);
  return{
    props:{
      session,
    }
  }
}