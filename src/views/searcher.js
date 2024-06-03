import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import CTA17 from '../components/cta17'
import List1 from '../components/list1'
import Footer1 from '../components/footer1'
import './searcher.css'

const Searcher = (props) => {
  return (
    <div className="searcher-container">
      <Helmet>
        <title>Searcher - Silver Pristine Otter</title>
        <meta property="og:title" content="Searcher - Silver Pristine Otter" />
      </Helmet>
      <Navbar4 rootClassName="navbar4-root-class-name"></Navbar4>
      <CTA17></CTA17>
      <List1 rootClassName="list1-root-class-name"></List1>
      <Footer1 rootClassName="footer1-root-class-name"></Footer1>
    </div>
  )
}

export default Searcher
