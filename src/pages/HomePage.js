import React from 'react';
import FyloWorks from '../components/FyloWorks/FyloWorks';
import Icon from '../components/IconMenu/Icon';
import MainTemplate from '../components/MainTemplate/MainTemplate'
import TopPage from '../components/TopPage/TopPage'

const HomePage = () => {
  return (
<MainTemplate>
  <TopPage/>
  <Icon/>
  <FyloWorks/>
  </MainTemplate>
  )
}

export default HomePage;
