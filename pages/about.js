import Link from 'next/link'
import Head from 'next/head'
import React from 'react'

function about() {
  return (
    <>
        <Link href="/"><a>Home</a></Link>
    <div>
        <Head>
            <title>About</title>
            
        </Head>
     < h1>About</h1>
    </div>
    </>
  )
}

export default about
