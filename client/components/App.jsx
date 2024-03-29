import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// AUTH0 IMPORTS:
import { cacheUser } from '../auth0-utils'

import { useAuth0 } from '@auth0/auth0-react'
import {
  IfAuthenticated,
  IfNotAuthenticated,
} from './Authenticated/Authenticated'

// COMPONENT IMPORTS
import NavBar from './Nav/NavBar'
import Register from './Register/Register'
import Home from './Home/Home'
import Details from './Details/Details'
import Footer from './Footer/Footer'
import AddEvent from './EventsComponents/AddEvent/AddEvent'
import ThanksForAttending from './Details/ThanksForAttending'

const App = () => {
  cacheUser(useAuth0)
  return (
    <>
      {/* outer most container */}
      <div className="w-full bg-white flex flex-col items-center">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            {/* <IfAuthenticated> */}
            <Route path="/event/:id" element={<Details />} />
            {/* </IfAuthenticated> */}
            <Route path="/add" element={<AddEvent />} />
            <Route path="/thanks/:id" element={<ThanksForAttending />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
