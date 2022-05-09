import React from 'react'
import Sidebar from '../../components/sidebar/sidebar.jsx'
import Top from '../../components/top/top.jsx'
import DisplayHome from '../../components/DisplayHome/DisplayHome.jsx'
import { Container } from './home.js'

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Top />
      <DisplayHome />
    </Container>
  );
}

export default Home