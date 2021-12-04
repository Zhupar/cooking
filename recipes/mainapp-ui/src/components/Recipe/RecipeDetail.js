import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function RecipeDetail () {
    const [recipe, setRecipe] = useState([]);

    let {id} = useParams();
    console.log(id)

    useEffect(()=> {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/recipe/${id}/`
        }).then(response => {
            setRecipe(response.data)
            console.log(response.data)
        })
    }, [id])
    return (
        <div>
            <p>{recipe.title}</p>
            <img src={recipe.img} alt={recipe.title} />
            <h5>Ingredients:</h5>
            <p>{recipe.ingredients}</p>
            <hr />
            <p>{recipe.cooking}</p>

        </div>
    )
}



export default RecipeDetail