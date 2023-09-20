import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import '../index.css'
import '../index.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
function CuisinePage() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()
  const getCusine = async (name) => {
    const check = localStorage.getItem('cuisine')
    if (check) {
      setCuisine(JSON.parse(check))
    }

    else {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=20&cuisine=${name}`)
      const response = await data.json();
      localStorage.setItem('cuisine', JSON.stringify(response.results))
      setCuisine(response.results);
    }
    // console.log(response.results)
  }
  useEffect(() => {
    getCusine(params.type)
    // console.log(params.type)
  }, [params.type])
  return (
    <>
      <Navbar />
      <div style={{ margin: "0% 15%" }} >

        <h1 style={{ marginTop: "150px", color: "whitesmoke" }}>Top {params.type} Cuisines</h1>
        <div style={{ marginTop: "70px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(20rem,1fr))", gridGap: "3rem" }}>
          {cuisine.map((recipe) => {
            return (
              <Card  className="img-card"  key={recipe.id}>
                <Link to={`/details/${recipe.id}`}>
                  <img  src={recipe.image} alt={recipe.title} />
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
// position:relative;
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

export default CuisinePage
