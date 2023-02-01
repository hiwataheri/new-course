import Nav from './Nav'
import React from 'react'

function Layout() {
  return (
<>
<Nav/>
    <div className={Styles.container}>
      <main className={Styles.main}>{children}
      </main>
    </div>
    </>
  )
}

export default Layout
