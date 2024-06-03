import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Banner1 from '../components/banner1'
import Features16 from '../components/features16'
import Footer1 from '../components/footer1'
import './list.css'

const List = (props) => {
  return (
    <div className="list-container">
      <Helmet>
        <title>List - Silver Pristine Otter</title>
        <meta property="og:title" content="List - Silver Pristine Otter" />
      </Helmet>
      <Navbar4></Navbar4>
      <Banner1></Banner1>
      <Features16></Features16>
      <Footer1></Footer1>
    </div>
  )
}

export default List
