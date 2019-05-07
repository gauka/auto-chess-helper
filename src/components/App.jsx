import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

const App = () => (
  <div className="wrapper">
    <Sidebar />
    {/* <Header /> */}
    <Main />
  </div>
)

export default App
