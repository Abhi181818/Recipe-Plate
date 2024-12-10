import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
function SearchC() {
    let params = useParams()
    const [cuisine, setCuisine] = useState([])
    useEffect(() => {
        getCuisine(params.search)

    }, [params.search])
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=2c5fcbdd007f453498a6a76d331b6f7d&query=${name}`)
        const response = await data.json();
        setCuisine(response.results);
    }

    return (
        <>
            <Navbar />
            <div style={{ margin: "0% 15%" }} >

                <h1 style={{ marginTop: "150px", color: "whitesmoke" }}>Top {params.search} Cuisines</h1>
                <div style={{ marginTop: "70px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(20rem,1fr))", gridGap: "3rem" }}>
                    {cuisine.map((recipe) => {
                        return (
                            <Card className="img-card" key={recipe.id}>
                                <Link to={`/details/${recipe.id}`}>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <p>{recipe.title}</p>
                                </Link>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 25px;
  }
  p{
    border-radius:25px;
    position: relative;
    left: 50%;
    bottom: 80%;
    transform: translate(-50%, 50%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
  }
`;

export default SearchC
