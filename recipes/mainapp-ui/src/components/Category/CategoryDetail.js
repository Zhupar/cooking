import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function CategoryDetail () {
    const [category, setCategory] = useState({});
    const [recipe, setRecipe] = useState([]);

    let {id} = useParams();
    console.log(id)

    useEffect(()=> {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/category/${id}/`
        }).then(response => {
            setCategory(response.data)
            setRecipe(response.data.recipes)
            console.log(response.data.recipes)
        })
    }, [id])
    return (
        <div>
            <p>Category: {category.name}</p>
            {recipe.map(r=>
            <ul key={r.id}>
                <li>{r.title}  <Link to={{pathname: `/recipe/${r.id}/`}}>Details</Link><br/><hr/></li>
                
            </ul>
                )}
        </div>
    )
}



export default CategoryDetail