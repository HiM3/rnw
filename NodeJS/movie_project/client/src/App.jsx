import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">MovieDB</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/form">Add Movie</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/MovieList">Movies</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h1 className="display-4 mb-4">Welcome to Movie Database</h1>
                <p className="lead">Discover and manage your favorite movies.</p>
              </div>
            } />
            <Route path="/form" element={<MovieForm />} />
            <Route path="/form/:id" element={<MovieForm />} />
            <Route path="/MovieList" element={<MovieList />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
