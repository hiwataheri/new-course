import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <nav className={nanStyles.nav}>
      <ul>
        <li>    
            <Link href="/"><a>Home</a></Link>
        </li>
        <li>
            <Link href="/about"><a>About</a></Link>
        </li>
        </ul>
    </nav>
  )
}

export default Nav
