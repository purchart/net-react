import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import MovieIndex from './movies/MovieIndex'
import PersonIndex from './persons/PersonIndex';
import MovieDetail from './movies/MovieDetail';
import PersonDetail from './persons/PersonDetail';

function App(){
  return(
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/movies"} className="nav-link">
                Filmy
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/people"} className="nav-link">
                Osobnosti
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Navigate to={"/movies"} />} />
            <Route path="/movies" element={<MovieIndex/>} />
            <Route path="/movies/show/:id" element={<MovieDetail />} />
            <Route path="/people" element={<PersonIndex />} />
            <Route path="/people/show/:id" element={<PersonDetail />} />
        </Routes>        
      </div>
    </Router>
  )
}

export default App;