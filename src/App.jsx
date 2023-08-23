import React from 'react'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import Support from './components/Support/Support'
import Info from './components/Info/Info'
import Travelers from './components/Travelers/Travelers'
import Subscribers from './components/Subscribers/Subscribers'
import Lounge from './components/Lounge/Lounge'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribers/>
      <Footer/>

    </div>
  )
}

export default App