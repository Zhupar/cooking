import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Navbar() {

    const[categories, setCategories] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/category/"
        }).then(response => {
            setCategories(response.data)
            console.log(response.data)

        })
    }, [])
  
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Recipes</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <div className="navbar-nav">
                      {categories.map(c=><Link to={{
                          pathname: `/category/${c.id}/`}} className="nav-link">{c.name}</Link>)}
                  </div>
              </div>
          </nav>      
      </div>
   

  );
}

export default Navbar;
