import React from 'react'
// import UserLayout from '../../Layout/User-layout'
import UserLayout from './../../Layout/User-layout';
import Slider from './Slider';
import Info from './Info';
import Ruknlar from './Ruknlar';
import YangiAdded from './YangiAdded';

const Home = () => {
  return (
    <div>
       <UserLayout/>
       <Slider/>
       <Info/>
      <Ruknlar/>
      <YangiAdded/>

    </div>
  )
}

export default Home
