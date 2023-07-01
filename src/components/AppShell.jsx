import React from 'react'
import Header from './Header'
import Footer from './Footer'

function AppShell(props) {
  return (
    <>    
    <div>
      <Header/>
      <section>
        {props.children}
      </section>
      <Footer/>
    </div>
    </>
  )
}

export default AppShell
