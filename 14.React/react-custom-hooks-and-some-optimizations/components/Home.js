import React from 'react'
import Body from './body'
import Navbar from './navbar'

function Home() {
    const [counter, serCounter] = React.useState(0)
  return (
    <>
    <Navbar serCounter/>
    <Body counter/>
    </>
  )
}

export default Home