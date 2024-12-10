import React from 'react'
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import LoadingSpin from "react-loading-spin";
import '../index.css'
function Veg() {
  const [veggie, setVeggie] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getVeggie()
  }, [])
  const getVeggie = async () => {
    setLoading(true);
    const check = localStorage.getItem("veggie")
    if (check) {
      setVeggie(JSON.parse(check))
      setLoading(false)
    }
    else {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=2c5fcbdd007f453498a6a76d331b6f7d&number=10&tags=vegetarian`)
      const data = await response.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes))
      // console.log(data)
      setVeggie(data.recipes)
      setLoading(false);

    }
  }
  return (
    <Wrapper >
      <h3 style={{ color: "whitesmoke" }}>Veggie Picks</h3>
      <Splide style={{ borderRadius: "20px" }}
        options={{
          perPage: 4,
          drag: "free",
          gap: "2rem",
          arrows: true,
          pagination: false,
          type: "loop",
          autoplay: true,
          pauseOnHover: true,
          perMove: "1"
        }}
      >
        {loading ? (<LoadingSpin
          width="15px"
          timingFunction="ease-in-out"
          direction="alternate"
          size="200px"
          primaryColor="yellow"
          secondaryColor="#333"
          numberOfRotationsInAnimation={2}   />) :
          (<>
            {veggie.map((recipe) => {
              return (
                <SplideSlide key={recipe.id} >
                  <Card className="img-card">
                    <Link to={`/details/${recipe.id}`}>
                    <p className="title">{recipe.title}</p>
                    <img  src={recipe.image} alt={recipe.title} />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })
            }</>)}
      </Splide>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  // margin: 4rem 2rem;
  margin: 0% 15%;
  margin-top:30px;
  margin-bottom:30px
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
//   background:#1869b7 ;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius:20px;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 999;
    left: 50%;
    bottom: 50%;
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

export default Veg
