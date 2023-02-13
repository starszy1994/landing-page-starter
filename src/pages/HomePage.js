import React from 'react';
import FyloWorks from '../components/FyloWorks/FyloWorks';
import Icon from '../components/IconMenu/Icon';
import MainTemplate from '../components/MainTemplate/MainTemplate'
import NewsletterMenu from '../components/Newsletter/NewsletterMenu';
import Opinions from '../components/Opinions/Opinions';
import TopPage from '../components/TopPage/TopPage'

const HomePage = () => {
  return (
<MainTemplate>
  <TopPage/>
  <Icon/>
  <FyloWorks/>
  <Opinions/>
  <NewsletterMenu/>
  </MainTemplate>
  )
}

export default HomePage;
